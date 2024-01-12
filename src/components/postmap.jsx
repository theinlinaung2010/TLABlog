import React, { useCallback } from "react";
import ReactFlow, {
  ReactFlowProvider,
  Controls,
  Background,
  ConnectionLineType,
  useStoreApi,
  useReactFlow,
  useNodesState,
  useEdgesState,
} from "reactflow";
import dagre from "dagre";

import { Link as gatsbyLink, useStaticQuery, graphql } from "gatsby";
import { useThemeUI } from "theme-ui";

import CategoryNode from "./category-node.jsx";
import GroupNode from "./group-node.jsx";
import CenterNode from "./center-node.jsx";
import PostNode from "./post-node.jsx";

import "reactflow/dist/style.css";

let screenWidth = 1000;
if (typeof window !== "undefined") {
  screenWidth = window.innerWidth;
}
const nodeWidth = Math.min(screenWidth * 0.15, 100);
const nodeHeight = 15;

function getTextWidth(text, font) {
  // re-use canvas object for better performance
  let canvas;
  if (typeof document !== "undefined") {
    canvas = getTextWidth.canvas || (getTextWidth.canvas = document.createElement("canvas"));
  } else {
    return nodeWidth;
  }

  const context = canvas.getContext("2d");
  context.font = font;
  const metrics = context.measureText(text);
  return metrics.width;
}

// dagre layout function
const getLayoutedElements = (nodes, edges, isLeft) => {
  const dagreGraph = new dagre.graphlib.Graph({ compound: true });
  dagreGraph.setDefaultEdgeLabel(() => ({}));

  const rankdir = isLeft ? "RL" : "LR";
  dagreGraph.setGraph({ rankdir: rankdir, ranksep: 100, nodesep: 10, edgesep: 10 });

  nodes.forEach((node) => {
    const _nodeWidth = node.type === "groupNode" ? nodeWidth * 1 : nodeWidth;
    const _nodeHeight = node.type === "groupNode" ? nodeHeight * 3 : nodeHeight;
    dagreGraph.setNode(node.id, { width: _nodeWidth, height: _nodeHeight });

    // set cluster node
    if (node.type === "groupNode") {
      dagreGraph.setNode(node.id + "-cluster", { height: 0 });
    }
  });

  // group the clusters
  nodes.forEach((node) => {
    if (node.type === "postNode" && node.group != "") {
      dagreGraph.setParent(node.id, node.group + "-cluster");
    }
  });

  edges.forEach((edge) => {
    dagreGraph.setEdge(edge.source, edge.target);
  });

  dagre.layout(dagreGraph);

  nodes.forEach((node) => {
    const nodeWithPosition = dagreGraph.node(node.id);
    node.targetPosition = isLeft ? "right" : "left";
    node.sourcePosition = isLeft ? "left" : "right";

    // shifting the dagre node position (anchor=center center) to the top left
    if (isLeft) {
      node.position = {
        x: nodeWithPosition.x - nodeWidth * 2 - getTextWidth(node.data.label, "12px sans-serif"),
        y: nodeWithPosition.y,
      };
    } else {
      node.position = {
        x: nodeWithPosition.x + nodeWidth * 2,
        y: nodeWithPosition.y,
      };
    }

    return node;
  });

  return { nodes, edges };
};

const nodeTypes = {
  categoryNode: CategoryNode,
  groupNode: GroupNode,
  centerNode: CenterNode,
  postNode: PostNode,
};

// the main component
const LayoutFlow = () => {
  // query the mdx
  const data = useStaticQuery(graphql`
    query {
      allMdx(limit: 2000) {
        categoriesGroup: group(field: { frontmatter: { categories: SELECT } }) {
          fieldValue
          totalCount
        }
        groupsGroup: group(field: { frontmatter: { group: SELECT } }) {
          fieldValue
          totalCount
        }
        nodes {
          frontmatter {
            categories
            group
            title
            slug
          }
        }
      }
    }
  `);

  const catGroup = data.allMdx.categoriesGroup;
  const groupGroup = data.allMdx.groupsGroup;
  const posts = data.allMdx.nodes;

  const position = { x: 0, y: 0 };

  const centerNode = {
    id: "1",
    data: { label: "TLA Blog", url: "" },
    type: "centerNode",
    position,
  };

  const catNodes = catGroup.map((cat, index) => ({
    id: cat.fieldValue,
    data: { label: cat.fieldValue, url: "" },
    category: cat.fieldValue,
    type: "categoryNode",
    position,
  }));

  const postNodes = posts.map((node, index) => ({
    id: node.frontmatter.slug,
    data: { label: node.frontmatter.title, url: node.frontmatter.slug },
    category: node.frontmatter.categories[0] || "",
    group: node.frontmatter.group || "",
    type: "postNode",
    position,
  }));

  const groupNodes = groupGroup.map((group, index) => ({
    id: group.fieldValue,
    data: { label: group.fieldValue, url: "" },
    // find the postNode which belongs to this group and get the category
    category: postNodes.find((post) => post.group === group.fieldValue).category || "",
    group: group.fieldValue,
    type: "groupNode",
    position,
  }));

  // divide the category nodes into two groups
  const left_catNodes = catNodes.slice(0, Math.floor(catNodes.length / 2));
  const right_catNodes = catNodes.slice(Math.floor(catNodes.length / 2));

  const allNodes = [...catNodes, ...groupNodes, ...postNodes];

  // divide all nodes into left and right based on the category
  const leftNodes = [];
  const rightNodes = [];

  allNodes.forEach((node) => {
    const isLeft = left_catNodes.some((cat) => cat.id === node.category);
    node.isLeft = isLeft;

    if (isLeft) {
      leftNodes.push(node);
    } else {
      rightNodes.push(node);
    }
  });
  rightNodes.push(centerNode);

  console.log("allNodes", allNodes);

  // create edges for all nodes
  const allEdges = allNodes.map((node) => ({
    id: `e${node.id}`,
    // if node.group is undefined, then connect to category
    // otherwise connect to group
    source:
      node.type === "categoryNode"
        ? "1"
        : node.type === "groupNode"
        ? node.category
        : node.type === "postNode" && node.group === ""
        ? node.category
        : node.group,
    target: node.id,
    sourceHandle: node.isLeft ? "l" : "r",
    targetHandle: node.isLeft ? "tr" : "tl",
    isLeft: node.isLeft,
  }));

  // separate the edges into left and right
  const leftEdges = allEdges.filter((edge) => edge.isLeft);
  const rightEdges = allEdges.filter((edge) => !edge.isLeft);

  const { nodes: lLayoutedNodes, edges: lLayoutedEdges } = getLayoutedElements(leftNodes, leftEdges, true);
  const { nodes: rLayoutedNodes, edges: rLayoutedEdges } = getLayoutedElements(rightNodes, rightEdges, false);

  // find the vertical center of left and right nodes
  const lCenter = lLayoutedNodes.reduce((acc, node) => acc + node.position.y, 0) / lLayoutedNodes.length;
  const rCenter = rLayoutedNodes.reduce((acc, node) => acc + node.position.y, 0) / rLayoutedNodes.length;

  // move the left nodes so that the vertical center is the same as the right nodes
  lLayoutedNodes.forEach((node) => {
    node.position.y = node.position.y + (rCenter - lCenter);
  });

  const allLayoutedNodes = [...lLayoutedNodes, ...rLayoutedNodes];
  const allLayoutedEdges = [...lLayoutedEdges, ...rLayoutedEdges];

  const [nodes, setNodes, onNodesChange] = useNodesState(allLayoutedNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(allLayoutedEdges);

  const store = useStoreApi();
  const { zoomIn, zoomOut, setCenter } = useReactFlow();

  const focusNode = () => {
    const { nodeInternals } = store.getState();
    const nodes = Array.from(nodeInternals).map(([, node]) => node);

    const _centerNode = nodes.find((node) => node.type === "centerNode");

    if (_centerNode) {
      const x = _centerNode.position.x + _centerNode.width / 2;
      const y = _centerNode.position.y + _centerNode.height / 2;
      const zoom = 1.1;

      setCenter(x, y, { zoom, duration: 800 });
    }
  };

  const { theme } = useThemeUI();

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      nodeTypes={nodeTypes}
      onNodesChange={onNodesChange}
      connectionLineType={ConnectionLineType.SmoothStep}
      fitView
      onInit={focusNode}
    >
      <Controls showInteractive={false} />
      <Background color={theme.colors.bgrid} variant="lines" gap={15} size={1} />
    </ReactFlow>
  );
};

function PostMap(props) {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <ReactFlowProvider>
        <LayoutFlow />
      </ReactFlowProvider>
    </div>
  );
}

export default PostMap;

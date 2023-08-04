import React, { useCallback } from "react";
import ReactFlow, {
  addEdge,
  ConnectionLineType,
  useNodesState,
  useEdgesState,
} from "reactflow";
import dagre from "dagre";

import { Link as gatsbyLink, useStaticQuery, graphql } from "gatsby";

import CategoryNode from "./category-node.jsx";
import CenterNode from "./center-node.jsx";
import PostNode from "./post-node.jsx";

import "reactflow/dist/style.css";

const nodeWidth = 120;
const nodeHeight = 20;

const getLayoutedElements = (nodes, edges, isLeft) => {
  const dagreGraph = new dagre.graphlib.Graph();
  dagreGraph.setDefaultEdgeLabel(() => ({}));

  const rankdir = isLeft ? "RL" : "LR";
  dagreGraph.setGraph({ rankdir: rankdir, ranksep: 100, nodesep: 10 });

  nodes.forEach((node) => {
    dagreGraph.setNode(node.id, { width: nodeWidth, height: nodeHeight });
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
        x: nodeWithPosition.x - nodeWidth / 2 - nodeWidth * 2,
        y: nodeWithPosition.y - nodeHeight / 2,
      };
    } else {
      node.position = {
        x: nodeWithPosition.x - nodeWidth / 2 + nodeWidth * 2,
        y: nodeWithPosition.y - nodeHeight / 2,
      };
    }

    return node;
  });

  return { nodes, edges };
};

const nodeTypes = {
  categoryNode: CategoryNode,
  centerNode: CenterNode,
  postNode: PostNode,
};

const LayoutFlow = () => {
  // query the categories
  const data = useStaticQuery(graphql`
    query {
      allMdx(limit: 2000) {
        categoriesGroup: group(field: { frontmatter: { categories: SELECT } }) {
          fieldValue
          totalCount
        }
        nodes {
          frontmatter {
            categories
            title
            slug
          }
        }
      }
    }
  `);

  const catGroup = data.allMdx.categoriesGroup;
  const posts = data.allMdx.nodes;

  const position = { x: 0, y: 0 };

  const centerNode = {
    id: "1",
    data: { label: "All Posts", url: "" },
    type: "centerNode",
    position,
  };

  const catNodes = catGroup.map((cat, index) => ({
    id: cat.fieldValue,
    data: { label: cat.fieldValue, url: "https://www.google.com" },
    type: "categoryNode",
    position,
  }));

  const postNodes = posts.map((node, index) => ({
    id: node.frontmatter.slug,
    data: { label: node.frontmatter.title, url: node.frontmatter.slug },
    category: node.frontmatter.categories ? node.frontmatter.categories[0] : "",
    type: "postNode",
    position,
  }));

  // divide the catNodes into two groups
  const left_catNodes = catNodes.slice(0, Math.floor(catNodes.length / 2));
  const right_catNodes = catNodes.slice(Math.floor(catNodes.length / 2));

  const leftPostNodes = [];
  const rightPostNodes = [];

  // divide the postNodes into two groups
  postNodes.forEach((node) => {
    const isLeft = left_catNodes.some((cat) => cat.id === node.category);

    if (isLeft) {
      leftPostNodes.push(node);
    } else {
      rightPostNodes.push(node);
    }
  });

  const left_edges = left_catNodes.map((node) => ({
    id: `e1${node.id}`,
    source: "1",
    target: node.id,
    sourceHandle: "l",
    targetHandle: "tr",
  }));

  const left_post_edges = leftPostNodes.map((node) => ({
    id: `e${node.id}`,
    source: node.category,
    target: node.id,
    sourceHandle: "sl",
    targetHandle: "tr",
  }));
  left_edges.push(...left_post_edges);

  const right_edges = right_catNodes.map((node) => ({
    id: `e1${node.id}`,
    source: "1",
    target: node.id,
    sourceHandle: "r",
    targetHandle: "tl",
  }));

  const right_post_edges = rightPostNodes.map((node) => ({
    id: `e${node.id}`,
    source: node.category,
    target: node.id,
    sourceHandle: "sr",
    targetHandle: "tl",
  }));
  right_edges.push(...right_post_edges);

  // add the center node to the left nodes
  left_catNodes.push(centerNode);

  // combine the postNodes with the catNodes
  left_catNodes.push(...leftPostNodes);
  right_catNodes.push(...rightPostNodes);

  const { nodes: lLayoutedNodes, edges: lLayoutedEdges } = getLayoutedElements(
    left_catNodes,
    left_edges,
    true
  );

  const { nodes: rLayoutedNodes, edges: rLayoutedEdges } = getLayoutedElements(
    right_catNodes,
    right_edges,
    false
  );

  const allLayoutedNodes = [...lLayoutedNodes, ...rLayoutedNodes];
  const allLayoutedEdges = [...lLayoutedEdges, ...rLayoutedEdges];

  const [nodes, setNodes, onNodesChange] = useNodesState(allLayoutedNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(allLayoutedEdges);

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        onNodesChange={onNodesChange}
        connectionLineType={ConnectionLineType.SmoothStep}
        fitView
      ></ReactFlow>
    </div>
  );
};

export default LayoutFlow;

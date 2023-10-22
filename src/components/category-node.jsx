/** @jsx jsx */
import { jsx } from "theme-ui";

import React, { memo } from "react";
import { Handle, Position } from "reactflow";
import { Link } from "gatsby";

export default memo(({ data, isConnectable }) => {
  return (
    <div
      className="category-node"
      sx={{
        padding: "0.5rem",
        border: "1px solid",
        borderRadius: 30,
      }}
    >
      <Handle type="target" position={Position.Left} id="tl" isConnectable={isConnectable} />
      <Handle type="target" position={Position.Right} id="tr" isConnectable={isConnectable} />
      <div>{data.label}</div>
      <Handle type="source" position={Position.Right} id="r" isConnectable={isConnectable} />
      <Handle type="source" position={Position.Left} id="l" isConnectable={isConnectable} />
    </div>
  );
});

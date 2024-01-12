/** @jsx jsx */
import { jsx } from "theme-ui";

import React, { memo } from "react";
import { Handle, Position } from "reactflow";
import { Link } from "gatsby";

export default memo(({ data }) => {
  return (
    <div
      className="category-node"
      sx={{
        padding: "5px 15px",
        backgroundColor: "background",
        border: "1px solid",
        borderRadius: 30,
      }}
    >
      <Handle type="target" position={Position.Left} id="tl" isConnectable={false} />
      <Handle type="target" position={Position.Right} id="tr" isConnectable={false} />
      <div>{data.label}</div>
      <Handle type="source" position={Position.Right} id="r" isConnectable={false} />
      <Handle type="source" position={Position.Left} id="l" isConnectable={false} />
    </div>
  );
});

/** @jsx jsx */
import { jsx } from "theme-ui";

import React, { memo } from "react";
import { Handle, Position } from "reactflow";

export default memo(({ data, isConnectable }) => {
  return (
    <div
      className="center-node"
      sx={{
        padding: "10px 10px",
        border: "1px solid",
        borderRadius: 100,
      }}
    >
      <Handle type="source" id="l" position={Position.Left} isConnectable={isConnectable} />
      <div>{data.label}</div>
      <Handle type="source" position={Position.Right} id="r" isConnectable={isConnectable} />
    </div>
  );
});

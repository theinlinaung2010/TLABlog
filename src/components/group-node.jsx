/** @jsx jsx */
import { jsx } from "theme-ui";

import React, { memo } from "react";
import { Handle, Position } from "reactflow";
import { Link } from "gatsby";

export default memo(({ data }) => {
  return (
    <div
      className="group-node"
      sx={{
        padding: "3px 15px",
        border: "1px solid",
        background: "muted",
        borderRadius: 30,
        fontSize: 12,
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

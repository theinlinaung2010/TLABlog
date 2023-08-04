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
        padding: 1,
        fontSize: 12,
      }}
    >
      <Handle
        type="target"
        position={Position.Left}
        id="tl"
        isConnectable={isConnectable}
      />
      <Handle
        type="target"
        position={Position.Right}
        id="tr"
        isConnectable={isConnectable}
      />
      <div>
        <Link to={`/${data.url}`}>{data.label}</Link>
      </div>
      <Handle
        type="source"
        position={Position.Right}
        id="sr"
        isConnectable={isConnectable}
      />
      <Handle
        type="source"
        position={Position.Left}
        id="sl"
        isConnectable={isConnectable}
      />
    </div>
  );
});

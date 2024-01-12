/** @jsx jsx */
import { jsx } from "theme-ui";

import React, { memo } from "react";
import { Handle, Position } from "reactflow";
import { Link } from "gatsby";

export default memo(({ data }) => {
  return (
    <div
      className="post-node"
      sx={{
        padding: 1,
        fontSize: 12,
      }}
    >
      <Handle type="target" position={Position.Left} id="tl" isConnectable={false} sx={{ opacity: "0%" }} />
      <Handle type="target" position={Position.Right} id="tr" isConnectable={false} sx={{ opacity: "0%" }} />
      <div>
        <Link to={`/${data.url}`} sx={{ variant: "styles.a" }}>
          {data.label}
        </Link>
      </div>
      <Handle type="source" position={Position.Right} id="sr" isConnectable={false} sx={{ opacity: "0%" }} />
      <Handle type="source" position={Position.Left} id="sl" isConnectable={false} sx={{ opacity: "0%" }} />
    </div>
  );
});

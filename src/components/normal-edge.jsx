/** @jsx jsx */
import { jsx } from "theme-ui";

import React, { memo } from "react";
import { getBezierPath } from "reactflow";

export default memo(({ id, sourceX, sourceY, targetX, targetY, sourcePosition, targetPosition }) => {
  const edgePath = getBezierPath({ sourceX, sourceY, sourcePosition, targetX, targetY, targetPosition })[0];

  return (
    <>
      <path id={id} d={edgePath} sx={{ fill: "none", stroke: "edge", pointerEvents: "none" }} />
    </>
  );
});

/** @jsx jsx */

import { jsx } from "theme-ui";

export default (props) => (
  <div sx={{ width: "100%", paddingTop: "66.67%", position: "relative", overflow: "hidden", border: "none" }}>
    <div
      sx={{
        width: "100%",
        height: "90%",
        position: "absolute",
        border: "none",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
      }}
    >
      {props.children}
    </div>

    <figcaption>{props.caption}</figcaption>
  </div>
);

/** @jsx jsx */

import { jsx } from "theme-ui";

export default (props) => (
  <div sx={{ width: "100%", paddingTop: "66.67%", position: "relative", overflow: "hidden", border: "none" }}>
    <div
      sx={{
        width: "100%",
        height: "93%",
        position: "absolute",
        border: "none",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
      }}
    >
      <iframe src={props.src} width="100%" height="100%"></iframe>
    </div>

    <figcaption>{props.title}</figcaption>
  </div>
);

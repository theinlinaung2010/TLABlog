/** @jsx jsx */

import { jsx } from "theme-ui";

export default (props) => (
  <div sx={{ p: 3, bg: "muted", borderRadius: "default" }}>
    <p>{props.children}</p>
    <p sx={{ fontStyle: "italic" }}>{props.author}</p>
  </div>
);

/** @jsx jsx */

import { jsx } from "theme-ui";

export default (props) => (
  <div>
    <p sx={{ variant: "styles.root.figcaption" }}>{props.children}</p>
  </div>
);

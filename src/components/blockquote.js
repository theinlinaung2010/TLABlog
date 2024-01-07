/** @jsx jsx */

import { jsx } from "theme-ui";

export default (props) => (
  <div sx={{ variant: "styles.blockquote" }}>
    <p>{props.children}</p>
    <p sx={{ variant: "styles.blockquoteAuthor" }}>{props.author}</p>
  </div>
);

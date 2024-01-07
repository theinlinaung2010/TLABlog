/** @jsx jsx */

import { jsx } from "theme-ui";

export default (props) => (
  <code className="code-inline" sx={{ variant: "styles.codeInline" }}>
    {props.children}
  </code>
);

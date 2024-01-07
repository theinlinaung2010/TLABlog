/** @jsx jsx */

import { jsx } from "theme-ui";

export default ({ src, alt }) => (
  <figure>
    <a href={src} target="_blank" rel="noopener noreferrer">
      <img src={src} sx={{ variant: "styles.root.img" }}></img>
    </a>
    <figcaption sx={{ variant: "styles.root.figcaption" }}>{alt}</figcaption>
  </figure>
);

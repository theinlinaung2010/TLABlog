/** @jsx jsx */

import { jsx } from "theme-ui";
import { Link } from "gatsby";

const Footer = () => {
  return (
    <footer
      sx={{
        width: "100%",
        variant: "layout.footer",
      }}
    >
      <div sx={{ mx: "auto", maxWidth: "container" }}>
        TLABlog.&nbsp;CC BY-NC 4.0.&nbsp;
        <a
          href="https://creativecommons.org/licenses/by-nc/4.0/"
          sx={{ color: "white" }}
          target="_blank"
          rel="noopener noreferrer"
        >
          Some rights reserved.
        </a>
      </div>
    </footer>
  );
};

export default Footer;

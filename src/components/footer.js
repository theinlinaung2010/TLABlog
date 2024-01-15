/** @jsx jsx */

import { jsx } from "theme-ui";
import { Link } from "gatsby";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      sx={{
        width: "100%",
        variant: "layout.footer",
        fontSize: "small",
      }}
    >
      <div
        sx={{
          mx: "auto",

          height: "2rem",
          maxWidth: "container",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <span sx={{ mx: [3, 2, 0] }}>
            TLABlog.&nbsp;CC BY-NC 4.0.&nbsp;
            <a
              href="https://creativecommons.org/licenses/by-nc/4.0/"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: "white", "&:hover": { color: "accent" } }}
            >
              Some rights reserved.
            </a>
          </span>
        </div>
        <Link
          to="https://github.com/theinlinaung2010/TLABlog"
          target="_blank"
          sx={{ mx: [3, 2, 0], color: "white", display: ["none", "flex", "flex"], "&:hover": { color: "accent" } }}
        >
          <FaGithub size="1.2rem" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;

/** @jsx jsx */
import { jsx } from "theme-ui";
import { Link } from "gatsby";
import ColormodeButton from "./colormode-button";

const Header = () => {
  return (
    <header
      sx={{
        variant: "layout.header",
      }}
    >
      <div
        sx={{
          maxWidth: "container",
          mx: "auto",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Link
          to="/"
          sx={{
            variant: "styles.navlink",
          }}
        >
          Home
        </Link>
        <Link
          to="/tags"
          sx={{
            variant: "styles.navlink",
          }}
        >
          Tags
        </Link>
        <div sx={{ mx: "auto" }} />
        <ColormodeButton />
        <Link
          to="/about"
          sx={{
            variant: "styles.navlink",
          }}
        >
          About
        </Link>
      </div>
    </header>
  );
};

export default Header;

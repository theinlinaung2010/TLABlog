/** @jsx jsx */
import { jsx } from "theme-ui";
import { Helmet } from "react-helmet";
import Header from "./header";
import Footer from "./footer";

import "normalize.css";

export default (props) => (
  <div
    sx={{
      variant: props.variant === "" ? "layout.default" : props.variant,
    }}
  >
    <Helmet>
      <title>{props.title}</title>
    </Helmet>
    <Header></Header>
    <div sx={{ flexGrow: 999 }}>{props.children}</div>
    <Footer></Footer>
  </div>
);

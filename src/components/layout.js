/** @jsx jsx */
import { jsx } from "theme-ui";
import Header from "./header";
import Footer from "./footer";

import "normalize.css";

export default (props) => (
  <div
    sx={{
      variant: "layout.root",
    }}
  >
    <Header></Header>
    <div sx={{ flexGrow: 999 }}>{props.children}</div>
    <Footer></Footer>
  </div>
);

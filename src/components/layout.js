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
    {props.children}
    <Footer></Footer>
  </div>
);

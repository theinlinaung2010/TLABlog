import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";

import "normalize.css";
import "katex/dist/katex.css";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;

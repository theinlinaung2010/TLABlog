import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

import "normalize.css";
import "../assets/css/main.css";
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

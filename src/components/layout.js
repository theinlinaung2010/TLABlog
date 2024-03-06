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
      {/* <!-- Google tag (gtag.js) --> */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-47HZ7B9QEG"></script>
      <script>
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-47HZ7B9QEG');`}
      </script>
    </Helmet>
    <Header></Header>
    <div sx={{ flexGrow: 999 }}>{props.children}</div>
    <Footer></Footer>
  </div>
);

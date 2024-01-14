/** @jsx jsx */
import { jsx } from "theme-ui";
import { Helmet } from "react-helmet";

import Header from "../components/header";
import PostMap from "../components/postmap";

const Map = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <Helmet>
        <title>Home | TLABlog</title>
      </Helmet>
      <Header />
      <div style={{ flex: 1 }}>
        <PostMap />
      </div>
    </div>
  );
};

export default Map;

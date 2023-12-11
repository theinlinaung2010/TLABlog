/** @jsx jsx */
import React from "react";
import { jsx } from "theme-ui";
import Header from "../components/header";
import PostMap from "../components/postmap";

const Map = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <Header />
      <div style={{ flex: 1 }}>
        <PostMap />
      </div>
    </div>
  );
};

export default Map;

export const Head = () => <title>Map</title>;

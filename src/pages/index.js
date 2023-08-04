/** @jsx jsx */
import React from 'react'
import { jsx } from "theme-ui";
import Header from "../components/header";
import PostMap from '../components/postmap'

const Map = () => {
  return (
    <div>
      <Header />
      <div style={{ width: '100%'}}>
        <PostMap />
      </div>
    </div>
  );
};

export default Map;

export const Head = () => <title>Map</title>;
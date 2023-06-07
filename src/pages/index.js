import React from "react";
import Layout from "../components/Layout";

const IndexPage = () => {
  return (
    <Layout>
      <main className="page">
        <h1>Welcome to my Blog!</h1>
      </main>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>My Blog Home</title>;

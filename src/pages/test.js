import React from "react";
import Layout from "../components/layout";

const TestPage = () => {
  return (
    <Layout>
      <main className="page">
        <h1>Welcome to the test page!</h1>
      </main>
    </Layout>
  );
};

export default TestPage;

export const Head = () => <title>Test page</title>;

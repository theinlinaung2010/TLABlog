import React from "react";
import { graphql } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import { Link } from "gatsby";
import Layout from "../components/layout";

const shortcodes = { Link }; // Provide common components here

export default function PageTemplate({ data, children }) {
  return (
    <Layout>
      <main className="page">
        <h1>{data.mdx.frontmatter.title}</h1>
        <MDXProvider components={shortcodes}>{children}</MDXProvider>
      </main>
    </Layout>
  );
}

export const query = graphql`
  query ($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
      }
    }
  }
`;
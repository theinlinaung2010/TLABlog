/** @jsx jsx */
import { jsx } from "theme-ui";

import React from "react";
import { graphql } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import { Link } from "gatsby";
import PostLayout from "../components/post-layout";

const shortcodes = { Link }; // Provide common components here

export default function PostTemplate({ data, children }) {
  const toc = data.mdx.tableOfContents;

  return (
    <PostLayout toc={toc}>
      <div>
        <h1>{data.mdx.frontmatter.title}</h1>
        <MDXProvider components={shortcodes}>{children}</MDXProvider>
      </div>
    </PostLayout>
  );
}

export const query = graphql`
  query ($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "D-MM-YYYY")
      }
      tableOfContents
    }
  }
`;

/** @jsx jsx */
import { jsx } from "theme-ui";
import Layout from "../components/layout";

import { Link, graphql } from "gatsby";

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <main sx={{ maxWidth: "container" }}>
        <h1>Welcome to my Blog.</h1>
        <ul>
          {data.allMdx.nodes.map((node) => (
            <li key={node.title}>
              <Link to={node.frontmatter.slug}>{node.frontmatter.title}</Link>
            </li>
          ))}
        </ul>
      </main>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>My Blog Home</title>;

export const query = graphql`
  query {
    allMdx {
      nodes {
        frontmatter {
          slug
          title
        }
      }
    }
  }
`;

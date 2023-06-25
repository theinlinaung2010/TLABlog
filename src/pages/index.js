/** @jsx jsx */
import { jsx, Container } from "theme-ui";
import Layout from "../components/layout";

import { Link, graphql } from "gatsby";

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <Container as="main" sx={{ variant: "layout.main" }}>
        <h1>Welcome to my Blog.</h1>
        <ul>
          {data.allMdx.nodes.map((node) => (
            <li key={node.title}>
              <Link to={node.frontmatter.slug}>{node.frontmatter.title}</Link>
            </li>
          ))}
        </ul>
      </Container>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>TLA Blog</title>;

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

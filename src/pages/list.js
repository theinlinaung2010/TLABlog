/** @jsx jsx */
import { jsx, Container } from "theme-ui";
import Layout from "../components/layout";

import { Link, graphql } from "gatsby";

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <Container as="main" sx={{ variant: "layout.main", bg: "muted" }}>
        <h2>List of all posts in reverse chronological order</h2>
        <ol>
          {data.allMdx.nodes.map((node, index) => (
            <li key={node.title}>
              <Link to={`/${node.frontmatter.slug}`}>{node.frontmatter.title}</Link>
            </li>
          ))}
        </ol>
      </Container>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>TLA Blog</title>;

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          slug
          title
        }
      }
    }
  }
`;

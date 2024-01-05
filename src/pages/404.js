/** @jsx jsx */
import { jsx } from "theme-ui";
import Header from "../components/header";
import { Container, Heading } from "@theme-ui/components";
import { Link, graphql } from "gatsby";

const NotFoundPage = ({ data }) => {
  // Get all the posts
  const allPosts = data.allMdx.nodes;

  // Generate a random index
  const randomIndex = Math.floor(Math.random() * allPosts.length);

  // Get the random post
  const randomPost = allPosts[randomIndex];

  return (
    <div>
      <Header></Header>
      <Container as="main" sx={{ variant: "layout.main", height: "100%" }}>
        <Heading as="h1">404: Not Found 😳</Heading>
        <p>
          Are you lost or did I miss something? <br />
          👉 <Link to="https://github.com/theinlinaung2010/TLABlog/issues/new"> Report a missing page</Link>
        </p>

        <p>
          Here is a random post you might like: <br />
          👉 <Link to={`/${randomPost.frontmatter.slug}`}>{randomPost.frontmatter.title}</Link>
        </p>

        <p>
          Or you can go home: <br />
          👉 <Link to="/">Go back to Home</Link>
        </p>
      </Container>
    </div>
  );
};

export default NotFoundPage;

export const Head = () => <title>404: Not found</title>;

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

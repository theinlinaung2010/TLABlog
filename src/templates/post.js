/** @jsx jsx */
import { jsx } from "theme-ui";
import { Box, Heading, Link, Divider } from "@theme-ui/components";
import { graphql } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import { Link as gatsbyLink } from "gatsby";
import kebabCase from "lodash/kebabCase";
import Layout from "../components/layout";
import "katex/dist/katex.min.css";

const shortcodes = { Link }; // Provide common components here

export default function PostTemplate({ data, children, props }) {
  const toc = data.mdx.tableOfContents;
  const tags = data.mdx.frontmatter.tags;

  return (
    <Layout>
      <div sx={{ display: "flex", flexWrap: "wrap" }}>
        <Box
          as="main"
          sx={{ variant: "layout.main", flexgGrow: 9999, flexBasis: 0 }}
        >
          <Heading as="h1">{data.mdx.frontmatter.title}</Heading>
          <p>{data.mdx.frontmatter.date}</p>
          {tags.map((tag) => (
            <Link
              as={gatsbyLink}
              key={tag}
              to={`/tags/${kebabCase(tag)}`}
              sx={{ variant: "styles.tag" }}
            >
              {tag}
            </Link>
          ))}
          <Divider
            sx={{
              borderTop: "2px solid",
              color: "line",
              marginTop: "1.5rem",
              marginBottom: "1.5rem",
            }}
          />
          <MDXProvider components={shortcodes}>{children}</MDXProvider>
        </Box>

        <aside
          sx={{
            variant: "layout.sidebar",
            flexGrow: 1,
            flexBasis: "sidebar",
          }}
        >
          {toc.items === undefined ? null : toc.items.length > 1 ? (
            <div sx={{ variant: "styles.toc" }}>
              <h3>မာတိကာ</h3>
              <ul sx={{ variant: "styles.tocitem" }}>
                {toc.items.map((item) => (
                  <li key={item.url}>
                    <Link to={item.url}>{item.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </aside>
      </div>
    </Layout>
  );
}

export const query = graphql`
  query ($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "D MMMM YYYY")
        tags
      }
      tableOfContents
    }
  }
`;

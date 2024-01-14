/** @jsx jsx */
import { jsx } from "theme-ui";

import { Container, Heading, Link, Divider, Flex, Box, Label } from "@theme-ui/components";
import { graphql } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import { Link as gatsbyLink } from "gatsby";
import { YouTube } from "mdx-embed";
import { Disqus } from "gatsby-plugin-disqus";

import kebabCase from "lodash/kebabCase";
import Layout from "../components/layout";
import Blockquote from "../components/blockquote";
import Iframe from "../components/iframe";
import Expander from "../components/expander";
import Image from "../components/image";
import Caption from "../components/caption";
import CodeBlock from "../components/code-highlighter";
import InlineCode from "../components/inline-code";

import "katex/dist/katex.min.css";
import config from "../../gatsby-config.mjs";

const shortcodes = {
  Link,
  Box,
  YouTube,
  Caption,
  Blockquote,
  Iframe,
  Expander,
  img: Image,
  code: ({ children, className }) => {
    return className ? <CodeBlock className={className}>{children}</CodeBlock> : <InlineCode>{children}</InlineCode>;
  },
};

export default function PostTemplate({ data, children }) {
  const toc = data.mdx.tableOfContents;
  const tags = data.mdx.frontmatter.tags;
  const title = data.mdx.frontmatter.title;
  const slug = data.mdx.frontmatter.slug;
  const discusConfig = {
    shortname: config.siteMetadata.disqusShortName,
    url: `${config.siteMetadata.siteUrl + slug}`,
    identifier: slug,
    title: title,
  };

  console.log(discusConfig);
  return (
    <Layout title={title}>
      <Flex>
        <Box as="aside" sx={{ variant: "layout.sidebarLeft" }}></Box>

        <Container as="main" sx={{ variant: "layout.main" }}>
          <Heading as="h1">{data.mdx.frontmatter.title}</Heading>
          <p>{data.mdx.frontmatter.date}</p>
          {tags.map((tag) => (
            <Link as={gatsbyLink} key={tag} to={`/tags/${kebabCase(tag)}`} sx={{ variant: "styles.tag" }}>
              {tag}
            </Link>
          ))}
          <Divider sx={{ variant: "styles.divider" }} />

          <MDXProvider components={shortcodes}>{children}</MDXProvider>

          <Divider sx={{ variant: "styles.divider" }} />
          <Disqus config={discusConfig} />
        </Container>

        <Box as="aside" sx={{ variant: "layout.sidebarRight" }}>
          {toc.items === undefined ? null : toc.items.length > 1 ? (
            <Box sx={{ variant: "styles.toc" }}>
              <h3>မာတိကာ</h3>
              <ul style={{ padding: 0 }}>
                {toc.items.map((item) => (
                  <Label key={item.url} sx={{ variant: "styles.tocitem" }}>
                    <Link as={gatsbyLink} to={item.url}>
                      {item.title}
                    </Link>
                  </Label>
                ))}
              </ul>
            </Box>
          ) : null}
        </Box>
      </Flex>
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
        slug
      }
      tableOfContents
    }
  }
`;

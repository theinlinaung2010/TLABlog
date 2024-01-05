/** @jsx jsx */
import { jsx } from "theme-ui";

// Components
import Layout from "../components/layout";
import TagsIndex from "../components/tagsIndex";
import { Link as gatsbyLink, graphql } from "gatsby";
import { Flex, Link, Card } from "theme-ui";
import kebabCase from "lodash/kebabCase";

const Tags = ({ pageContext, data }) => {
  const tag = pageContext.tag;
  const totalCount = data.filteredMdx.totalCount;
  const tagHeader = `${totalCount} post${totalCount === 1 ? "" : "s"} tagged with "${tag}"`;

  const nodes = data.filteredMdx.nodes;
  return (
    <Layout>
      {/* <SEO title={`"${tag}" tag`} /> */}
      <Flex sx={{ padding: [1, 3, 5], flexDirection: ["column", "column", "row"] }}>
        <div sx={{ display: ["none", "none", "block"] }}>
          <TagsIndex sx={{ flex: "1 0 50%" }}></TagsIndex>
        </div>

        <div sx={{ flex: "1 0 50%", px: [1, 2, 3], borderLeft: ["none", "none", "2px solid"], borderColor: "line" }}>
          <div sx={{ px: [1, 2, 3], marginLeft: [0, 0, "1rem"] }}>
            <h1>{tagHeader}</h1>

            {nodes.map((node) => {
              //   const { excerpt } = node;
              const title = node.frontmatter.title;
              const { slug, date, tags } = node.frontmatter;

              return (
                <Card key={slug} sx={{ variant: "cards.article" }}>
                  <Link as={gatsbyLink} to={`/${slug}`}>
                    <h3 sx={{ lineHeight: "1.8rem" }}>{title}</h3>
                  </Link>

                  <p sx={{ fontSize: "small" }}>{date}</p>
                  <p>
                    {tags.map((tag) => (
                      <Link
                        as={gatsbyLink}
                        key={tag.toLowerCase()}
                        to={`/tags/${kebabCase(tag)}`}
                        sx={{ variant: "styles.tag" }}
                      >
                        {tag.toLowerCase()}
                      </Link>
                    ))}
                  </p>

                  {/* <p>{excerpt}</p> */}
                </Card>
              );
            })}
          </div>
        </div>
      </Flex>
    </Layout>
  );
};

export default Tags;

export const pageQuery = graphql`
  query ($tag: String) {
    filteredMdx: allMdx(limit: 2000, filter: { frontmatter: { tags: { in: [$tag] } } }) {
      totalCount
      nodes {
        id
        frontmatter {
          title
          slug
          date(formatString: "D MMMM YYYY")
          tags
        }
      }
    }
    allMdx(limit: 2000) {
      tagsGroup: group(field: { frontmatter: { tags: SELECT } }) {
        fieldValue
        tagsCount: totalCount
      }
      mdxCount: totalCount
    }
  }
`;

export const Head = ({ pageContext, data }) => <title>Tag: {pageContext.tag}</title>;

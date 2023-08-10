/** @jsx jsx */
import { jsx } from "theme-ui";

// Components
import Layout from "../components/layout";
import TagsIndex from "../components/tagsIndex";
import { Link as gatsbyLink, graphql } from "gatsby";
import { Grid, Link, Card } from "theme-ui";
import kebabCase from "lodash/kebabCase";

const Tags = ({ pageContext, data }) => {
  const tag = pageContext.tag;
  const totalCount = data.filteredMdx.totalCount;
  const tagHeader = `${totalCount} post${totalCount === 1 ? "" : "s"} tagged with "${tag}"`;

  const nodes = data.filteredMdx.nodes;
  return (
    <Layout>
      {/* <SEO title={`"${tag}" tag`} /> */}
      <Grid gap={2} columns={[2, "1fr 1fr"]} sx={{ padding: [1, 3, 5] }}>
        <TagsIndex />

        <div sx={{ px: 3, borderLeft: "2px solid", borderColor: "line" }}>
          <div sx={{ px: 3, marginLeft: "1rem" }}>
            <h1>{tagHeader}</h1>

            {nodes.map((node) => {
              //   const { excerpt } = node;
              const title = node.frontmatter.title;
              const { slug, date, tags } = node.frontmatter;

              return (
                <Card key={slug} sx={{ lineHeight: "1.2rem" }}>
                  <Link as={gatsbyLink} to={`/${slug}`}>
                    <h3>{title}</h3>
                  </Link>

                  <p>{date}</p>
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
      </Grid>
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

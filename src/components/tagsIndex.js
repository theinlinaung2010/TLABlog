/** @jsx jsx */
import { jsx } from "theme-ui";
import { Link as gatsbyLink, useStaticQuery, graphql } from "gatsby";
import { Heading, Link } from "theme-ui";

import kebabCase from "lodash/kebabCase";

const TagsIndex = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(limit: 2000) {
        tagsGroup: group(field: { frontmatter: { tags: SELECT } }) {
          fieldValue
          tagsCount: totalCount
        }
      }
    }
  `);

  return (
    <div sx={{ px: 3, marginTop: "1rem" }}>
      <Heading as="h1">Tags</Heading>
      {data.allMdx.tagsGroup.map(({ fieldValue, tagsCount }) => (
        <Link
          as={gatsbyLink}
          key={fieldValue}
          to={`/tags/${kebabCase(fieldValue)}`}
          sx={{ variant: "styles.tagindex" }}
        >
          {fieldValue} ({tagsCount})
        </Link>
      ))}
    </div>
  );
};

export default TagsIndex;

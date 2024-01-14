/** @jsx jsx */
import { jsx } from "theme-ui";
import { Flex, Box } from "theme-ui";
import TagsIndex from "../components/tagsIndex";

import Layout from "../components/layout";

/*
todo:
 2. make tags searchable
*/

const TagsPage = ({ data }) => (
  <Layout title="Tags | TLA BLog">
    {/* <SEO title="Tags" /> */}
    <Flex
      sx={{
        flexDirection: ["column", "column", "row"],
        padding: [1, 3, 5],
        justifyContent: "space-between",
      }}
    >
      <TagsIndex sx={{ flex: "1 0 50%", marginBottom: [3, 0] }} />
      <div
        sx={{
          px: 3,
          flex: "1 0 50%",
          borderLeft: ["none", "none", "2px solid"],
          borderColor: "line",
        }}
      >
        <Box sx={{ marginTop: "5rem", textAlign: "center" }}>
          <h3>Select a tag</h3>
        </Box>
      </div>
    </Flex>
  </Layout>
);

export default TagsPage;

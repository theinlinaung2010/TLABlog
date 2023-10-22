/** @jsx jsx */
import { jsx } from "theme-ui";
import { Grid, Box } from "theme-ui";
import TagsIndex from "../components/tagsIndex";

import Layout from "../components/layout";
import { layout } from "dagre";
// import SEO from "../components/seo";

const TagsPage = ({ data }) => (
  <Layout variant="layout.contrastbg">
    {/* <SEO title="Tags" /> */}
    <Grid gap={2} columns={[2, "1fr 1fr"]} sx={{ padding: [1, 3, 5] }}>
      <TagsIndex />
      <div sx={{ px: 3, borderLeft: "2px solid", borderColor: "line" }}>
        <Box sx={{ marginTop: "5rem", textAlign: "center" }}>
          <h3>Select a tag</h3>
        </Box>
      </div>
    </Grid>
  </Layout>
);

export default TagsPage;

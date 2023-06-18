/** @jsx jsx */
import { jsx } from "theme-ui";
import Layout from "../components/layout";

const AboutPage = () => {
  return (
    <Layout>
      <main>
        <h1>This is about page.</h1>
      </main>
    </Layout>
  );
};

export default AboutPage;

export const Head = () => <title>About</title>;

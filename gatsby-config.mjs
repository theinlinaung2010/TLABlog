/**
 * @type {import('gatsby').GatsbyConfig}
 */
import remarkGfm from "remark-gfm";

const config = {
  siteMetadata: {
    title: "TLA-Blog",
    siteUrl: "https://tlablog.netlify.app/",
    description: "A minimalist blog with a focus on science, engineering and mathematics.",
    disqusShortName: "tlablog",
  },
  flags: {
    DEV_SSR: false,
  },
  plugins: [
    "gatsby-plugin-image",
    {
      resolve: "gatsby-remark-katex",
      option: {
        strict: "ignore",
      },
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: [".mdx", ".md"],
        mdxOptions: {
          strict: "ignore",
          remarkPlugins: [
            // Add GitHub Flavored Markdown (GFM) support
            remarkGfm,
          ],
        },
        // ============ Gatsby Remark Plugins ============ //
        gatsbyRemarkPlugins: [
          "gatsby-remark-katex",
          {
            resolve: "gatsby-remark-images",
            options: {
              showCaptions: ["title", "alt"],
              placeHolder: "blurred",
              maxWidth: 700,
              markdownCaptions: true,
            },
          },
          {
            resolve: `gatsby-remark-table-of-contents`,
            options: {
              exclude: "Table of Contents",
              tight: false,
              ordered: false,
              fromHeading: 2,
              toHeading: 4,
              className: "table-of-contents",
            },
          },
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              offsetY: `100`,
              icon: false,
              className: "remark-anchor",
            },
          },
          {
            resolve: `gatsby-remark-copy-linked-files`,
            options: {
              ignoreFileExtensions: [`png`, `jpg`, `jpeg`, `bmp`, `tiff`],
            },
          },
          "gatsby-plugin-mdx-embed",
        ],
        // ========= End of Gatsby Remark Plugins ========= //
      },
    },

    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-theme-ui",
      options: {
        preset: "@theme-ui/preset-bootstrap",
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: ["Noto Sans Myanmar"],
        display: "swap",
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/assets/images/blog_logo.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: "./content/posts/",
      },
    },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `tlablog`,
      },
    },
  ],
};

export default config;

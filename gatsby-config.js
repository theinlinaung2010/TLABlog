/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: "TLA-Blog",
    siteUrl: "https://www.yourdomain.tld",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-remark-katex",
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: [".mdx", ".md"],
        mdxOptions: {
          strict: "ignore",
          remarkPlugins: [
            // Add GitHub Flavored Markdown (GFM) support
            require(`remark-gfm`),
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
          "gatsby-plugin-mdx-embed",
          "gatsby-remark-responsive-iframe",
        ],
        // ========= End of Gatsby Remark Plugins ========= //
      },
    },

    // "gatsby-plugin-sitemap",
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
        icon: "src/assets/images/icon.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: "./src/content/posts/",
      },
    },
  ],
};

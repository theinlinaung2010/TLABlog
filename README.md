<h1 align="center">
  Repo of <a href="https://theinlinaung.com">TLABlog</a>
</h1>

[![Netlify Status](https://api.netlify.com/api/v1/badges/3a9a0279-4d10-4f92-b273-ad147cbf75c7/deploy-status)](https://app.netlify.com/sites/tlablog/deploys)

This repo contains the source code and post content for my personal blog [theinlinaung.com](https://theinlinaung.com).

Built using [Gatsby](https://www.gatsbyjs.com/) and hosted on [Netlify](https://www.netlify.com/). You can freely clone/fork this repo and use it for your own blog under [MIT License](https://opensource.org/licenses/MIT) for source code and [CC BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/) for post content.

See below for a quick explanation of this repo and how to get your own blog up and running. For more information, please refer to the [Gatsby](https://www.gatsbyjs.com/) and [Netlify](https://www.netlify.com/) documentation.

## Quick start
0. **Install prerequisites.**

    - [Node.js](https://nodejs.org/en/)
    - [Gatsby CLI](https://www.gatsbyjs.com/docs/tutorial/getting-started/part-0/#gatsby-cli)
    - [Git](https://git-scm.com/)

1. **Clone this repo.**

    ```shell
    git clone https://github.com/theinlinaung2010/TLABlog.git
    ```
    or download [zip file](https://github.com/theinlinaung2010/TLABlog/archive/refs/heads/main.zip) and extract.

2. **Install dependencies.**
    
    Go to the cloned directory and install dependencies.
    ```shell
    npm install --legacy-peer-deps
    ```

3.  **Start local server.**

    Start the local development server.
    ```shell
    gatsby develop
    ```
    After the startup, you should be able to access your site at `http://localhost:8000`.

4.  **Edit post content.**

    All the blog post content is located in `content/posts` directory with a subdirectory for each post. The posts are written in [Extended Markdown](https://mdxjs.com/) format and can be edited with any text editor. 
    
    Each post has a frontmatter section at the top of the file that contains metadata about the post such as title, tags, categories etc. I use [Katex](https://katex.org/) for rendering Latex equations. There are several JSX components made available to Markdown via shortcodes such as `Iframe`, `Expander`, etc. Check out [post template](src/templates/post.js) code if you want to modify the appearance of the posts.

    If your development server is running, the changes will be reflected in real-time (along with any error which might be cumbersome to solve). Don't worry, your edits won't affect the content in the original repository (however if you spot a mistake, feel free to [create a pull request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request)).

    If you intened to publish your own blog, delete all the posts in `content/posts` directory and replace them with your own.

## Deploy on Netlify

After you pushed the changes to your own repository, you can deploy your blog for the public to see. You can do so for free using [Netlify](https://www.netlify.com/blog/2016/09/29/a-step-by-step-guide-deploying-on-netlify/) in a few steps.

## Contribution

Feel free to open an issue or create a pull request if you have any suggestion or improvement. Alternatively, you can contact me at [admin-at-theinlinaung.com](mailto:admin@theinlinaung.com).

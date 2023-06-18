/** @jsx jsx */
import { jsx } from "theme-ui";
import Layout from "./layout";

import React from "react";

import "normalize.css";
import "katex/dist/katex.css";

export default (props) => (
  <Layout>
    <div sx={{ display: "flex", flexWrap: "wrap-reverse" }}>
      <aside sx={{ variant: "layout.sidebar" }}></aside>

      <main sx={{ variant: "layout.main" }}>{props.children}</main>

      <aside sx={{ variant: "layout.sidebar" }}>
        {props.toc.items === undefined ? null : props.toc.items.length > 1 ? (
          <div sx={{ variant: "layout.toc" }}>
            <h3>မာတိကာ</h3>
            <ul>
              {props.toc.items.map((item) => (
                <li key={item.url}>
                  <a href={item.url}>{item.title}</a>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </aside>
    </div>
  </Layout>
);

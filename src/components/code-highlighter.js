/** @jsx jsx */

import { jsx } from "theme-ui";
import { Highlight, themes } from "prism-react-renderer";
import { Button } from "@theme-ui/components";
import React from "react";

export default (props) => {
  const code = props.children;
  const language = props.language || "python";

  const [isCopied, setIsCopied] = React.useState(false);

  const copyToClipboard = async (str) => {
    try {
      await navigator.clipboard.writeText(str);
    } catch (err) {
      console.error("Could not copy code: ", err);
    }
  };

  return (
    <Highlight theme={themes.vsDark} code={code} language={language}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => {
        return (
          <pre style={style} sx={{ variant: "styles.prismCode" }}>
            <Button
              variant="styles.codeCopyButton"
              onClick={() => {
                copyToClipboard(code);
                setIsCopied(true);
                setTimeout(() => setIsCopied(false), 2000);
              }}
            >
              {isCopied ? "Copied 🎉" : "Copy"}
            </Button>
            <code className={className}>
              {tokens.slice(0, -1).map((line, i) => {
                const lineProps = getLineProps({ line, key: i });
                return (
                  <div key={i} {...lineProps}>
                    {line.map((token, key) => {
                      const tokenProps = getTokenProps({ token, key });
                      return <span {...tokenProps} />;
                    })}
                  </div>
                );
              })}
            </code>
          </pre>
        );
      }}
    </Highlight>
  );
};

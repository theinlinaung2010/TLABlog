/** @jsx jsx */

import { jsx } from "theme-ui";
import React, { useState } from "react";

const Expander = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const showLabel = props.show || "Show";
  const hideLabel = props.hide || "Hide";

  return (
    <div sx={{ variant: "styles.expander" }}>
      <button sx={{ variant: "styles.expanderButton" }} onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? hideLabel : showLabel}
      </button>
      <div sx={{ display: isOpen ? "block" : "none", variant: "styles.expanderContent" }}>{props.children}</div>
    </div>
  );
};

export default Expander;

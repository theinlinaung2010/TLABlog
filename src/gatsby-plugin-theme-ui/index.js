export default {
  colors: {
    text: "#333",
    background: "#FCFCFC",
    primary: "#0036A3",
    secondary: "#1F69FF",
    accent: "#46237A",
    muted: "#F6F6F6",
    line: "#CCCCCC",
  },

  fonts: {
    body: "Noto Sans Myanmar, sans-serif",
    heading: "Noto Sans Myanmar, sans-serif",
  },

  fontSizes: {
    body: "16px",
    header: "18px",
    footer: "16px",
    small: "14px",
    h1: "2rem",
    h2: "1.5rem",
    h3: "1.2rem",
  },

  fontWeights: {
    body: 400,
    heading: 600,
  },

  sizes: {
    container: 860,
    sidebar: 300,
  },

  lineHeights: {
    body: 1.8,
    heading: 1.6,
    table: 1.5,
  },

  radii: {
    default: "10px",
  },

  cards: {
    primary: {
      padding: 3,
      borderRadius: "default",
      boxShadow: "0 0 5px rgba(0, 0, 0, 0.225)",
    },

    article: {
      paddingLeft: 5,
      paddingRight: 5,
      paddingTop: 3,
      paddingBottom: 2,
      marginBottom: 3,
      borderRadius: "default",
      boxShadow: "0 0 5px rgba(0, 0, 0, 0.225)",
    },
  },

  breakpoints: ["45em", "85em"],

  layout: {
    root: {
      display: "flex",
      flexDirection: "column",
      minHeight: "100vh",
      bg: "muted",
      color: "text",
    },
    header: {
      color: "white",
      bg: "accent",
      fontSize: "header",
      alignItems: "center",
      width: "100%",
      position: "sticky",
      top: 0,
      py: 3,
      zIndex: 1,
    },
    footer: {
      color: "white",
      bg: "accent",
      fontSize: "footer",
      alignItems: "center",
      py: 1,
    },
    main: {
      bg: "background",
      lineHeight: "body",
      fontFamily: "body",
      fontSize: "body",
      maxWidth: "container",
      flex: "3 0",
      px: [3, 3, 5],
      py: [3, 3, 5],
    },
    sidebarLeft: {
      bg: "muted",
      display: ["none", "none", "block"],
      flex: "1 0",
      px: [3, 3, 4],
    },
    sidebarRight: {
      bg: "muted",
      display: ["none", "block", "block"],
      flex: "1 0",
      px: [3, 3, 4],
    },
  },

  styles: {
    root: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body",
      fontSize: "body",
      color: "text",
      bg: "background",
      scrollBehavior: "smooth",
      figcaption: {
        fontWeight: 600,
        marginTop: "1rem",
        textAlign: "center",
      },
      table: {
        lineHeight: "table",
        maxWidth: "90%",
        mx: "auto",
        fontSize: "small",
      },
      thead: {
        textAlign: "center",
      },
      h1: {
        fontSize: "h1",
        lineHeight: "heading",
      },
      h2: {
        scrollMarginTop: "4rem",
      },
      h3: {
        scrollMarginTop: "4rem",
      },
    },

    toc: {
      position: "sticky",
      top: ["3rem", "6rem", "7rem"],
      fontSize: "small",
      lineHeight: "2rem",
    },
    tocitem: {
      paddingLeft: 0,
      listStyle: "none",
      borderLeft: "2px solid",
      borderColor: "line",
      paddingLeft: "1rem",
      "&:active": {
        color: "primary",
      },
    },

    h2: {
      fontSize: "h2",
      marginTop: "2rem",
    },

    h3: {
      fontSize: "h3",
    },

    a: {
      color: "primary",
      textDecoration: "none",
      textUnderlineOffset: "0.2rem",
      "&:hover": {
        color: "secondary",
      },
    },

    navlink: {
      color: "inherit",
      textDecoration: "none",
      lineHeight: 1,
      px: 3,
      "&:hover": {
        color: "secondary",
      },
    },

    tag: {
      color: "text",
      bg: "muted",
      fontSize: "small",
      border: "1px solid",
      display: "inline-block",
      alignItems: "center",
      lineHeight: 1,
      px: 2,
      py: 2,
      marginRight: "0.5rem",
      marginBottom: "0.5rem",
      borderRadius: "default",
    },

    tagindex: {
      color: "text",
      bg: "muted",
      border: "1px solid",
      fontSize: "body",
      lineHeight: 1,
      display: "inline-block",
      alignItems: "center",
      px: 2,
      py: 2,
      marginBottom: "1rem",
      marginRight: "1rem",
      borderRadius: "default",
      "&:hover": {
        bg: "accent",
        color: "white",
      },
    },
  },
};

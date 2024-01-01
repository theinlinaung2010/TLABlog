export default {
  colors: {
    text: "#333",
    background: "#FCFCFC",
    primary: "#4780f4",
    secondary: "#236cff",
    accent: "#408cca",
    muted: "#F6F6F6",
    bgrid: "#eeeeee",
    header: "rgba(17, 33, 90, 0.75)",
    line: "#CCCCCC",
    link: "#0036A3",
    label: "#F6F6F6",
    modes: {
      dark: {
        text: "#fafafa",
        background: "#1f1f1f",
        primary: "#3879fa",
        secondary: "#8fb5ff",
        accent: "#4da9ff",
        muted: "#181818",
        bgrid: "#141414",
        header: "rgba(25, 35, 52, 0.85)",
        line: "#4c4c4c",
        link: "#5b93ff",
        label: "#2e2e2e",
      },
    },
    initialColorModeName: "light",
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
    },

    article: {
      bg: "none",
      border: "2px solid",
      borderColor: "line",
      paddingLeft: [2, 3, 5],
      paddingRight: [2, 3, 5],
      paddingTop: 2,
      paddingBottom: 1.5,
      marginBottom: 3,
      borderRadius: "default",
      lineHeight: "1.0rem",
    },
  },

  breakpoints: ["45em", "80em"],

  layout: {
    default: {
      display: "flex",
      flexDirection: "column",
      minHeight: "100vh",
      bg: "muted",
      color: "text",
    },
    contrastbg: {
      display: "flex",
      flexDirection: "column",
      minHeight: "100vh",
      bg: "white",
      color: "text",
    },
    header: {
      bg: "header",
      backdropFilter: "blur(5px)",
      color: "white",
      fontSize: "header",
      alignItems: "center",
      width: "100%",
      position: "sticky",
      top: 0,
      zIndex: 1,
    },
    footer: {
      bg: "header",
      color: "white",
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
        color: "text",
      },
      td: {
        color: "text",
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
      lineHeight: "1.5rem",
    },
    tocitem: {
      paddingLeft: 0,
      listStyle: "none",
      borderLeft: "2px solid",
      borderColor: "line",
      paddingLeft: "1rem",
      paddingTop: "0.5rem",
      paddingBottom: "0.5rem",
    },

    h2: {
      fontSize: "h2",
      marginTop: "2rem",
    },

    h3: {
      fontSize: "h3",
    },

    a: {
      color: "link",
      textDecoration: "none",
      textUnderlineOffset: "0.2rem",
      "&:hover": {
        color: "secondary",
        textDecoration: "none",
      },
    },

    navlink: {
      color: "inherit",
      border: "0px solid",
      textDecoration: "none",
      lineHeight: 1,
      px: 3,
      py: 3,
      "&:hover": {
        bg: "accent",
      },
    },

    tag: {
      color: "text",
      bg: "label",
      fontSize: "small",
      border: "none",
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
      bg: "label",
      border: "none",
      fontSize: "body",
      lineHeight: 1,
      display: "inline-block",
      alignItems: "center",
      px: 2,
      py: 2,
      marginBottom: "1rem",
      marginRight: "1rem",
      borderRadius: "default",
    },

    colormodeButton: {
      background: "none",
      color: "inherit",
      border: "none",
      cursor: "pointer",
      display: "block",
      mr: "0.5em",
      width: 30,
      height: 30,

      "& svg": {
        fill: "white",
      },
      "&:hover": {
        "& svg": {
          fill: "accent",
        },
      },
    },
  },
};

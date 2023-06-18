export default {
  colors: {
    text: "#333",
    background: "#FCFCFC",
    primary: "#1F69FF",
    secondary: "#0036A3",
    accent: "#46237A",
    muted: "#F6F6F6",
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
    container: 820,
    sidebar: 300,
  },

  lineHeights: {
    body: 1.8,
    heading: 1.2,
    table: 1.2,
  },

  layout: {
    root: {
      minHeight: "100vh",
      bg: "background",
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
      lineHeight: "body",
      fontFamily: "body",
      fontSize: "body",
      maxWidth: "container",
      mx: "auto",
      px: [3, 3, 4],
    },
    sidebar: {
      bg: "muted",
      maxWidth: "container",
      flexGrow: 1,
      flexBasis: "sidebar",
      px: [3, 3, 4],
      py: 4,
    },
    toc: {
      position: "sticky",
      top: "7rem",
      lineHeight: "body",
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
    },
    h1: {
      fontSize: "h1",
    },
    h2: {
      fontSize: "h2",
      marginTop: "2rem",
    },
    h3: {
      fontSize: "h3",
    },
    navlink: {
      color: "inherit",
      textDecoration: "none",
      lineHeight: 1,
      px: [3, 3, 4],
      "&:hover": {
        color: "primary",
      },
      "&:active": {
        color: "primary",
      },
    },
  },
};

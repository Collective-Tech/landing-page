import { createTheme } from "@mui/material/styles";

export const colors = {
    blue: "#0B1224",
    purple: "#800080",
    white: "#FFFFFF",
    black: "#000",
    light_gray: "#F1F1F1",
    gray: "#808080"

  };


let theme = createTheme({
    
   
    palette: {
      primary: {
        main: colors.black,
      },
      secondary: {
        main: colors.purple,
      },
      text: {
        primary: colors.white,
        secondary: "rgba(255, 255, 255, 0.7)",
        disabled: "rgba(255, 255, 255, 0.5)",
      },
      background: {
        default: colors.white,
        paper: colors.white,
      },
      success: {
        main: colors.gray,
      },
      warning: {
        main: colors.light_gray,
      },
      info: {
        main: colors.gray,
      },
    },
    typography: {
      // Base Typography
      fontFamily: [
        "Space Grotesk",
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(","),
      h1: {
        margin: 0,
        fontSize: "3rem",
        fontWeight: 600,
        marginBlockStart: "2.5rem",
        lineHeight: 1,
      },
      h2: {
        margin: 0,
        fontSize: "2.5rem",
        fontWeight: 600,
        marginBlockStart: "2.5rem",
        lineHeight: 1,
      },
      h3: {
        margin: 0,
        fontSize: "2rem",
        marginBlockStart: "2rem",
        fontWeight: 600,
      },
      h4: {
        margin: 0,
        fontSize: "1.75rem",
        marginBlockStart: "2rem",
        fontWeight: 600,
      },
      h5: {
        margin: 0,
        fontSize: "1.5rem",
        marginBlockStart: "2rem",
        fontWeight: 600,
      },
      h6: {
        margin: 0,
        fontSize: "1.25rem",
        marginBlockStart: "2rem",
        fontWeight: 600,
      },
      subtitle1: {
        fontSize: "1.5em",
      },
      subtitle2: {
        fontSize: "1.25em",
      },
      body1: {
        fontSize: "1em",
        lineHeight: 1.75,
      },
      body2: {
        fontSize: "0.75em",
        lineHeight: 1.75,
      },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: `
        a {
          text-decoration: none;
          color: inherit;
        }
        img {
         width: 100%;
        }
        span {
          color: ${colors.purple}
        }
      `,
      },
    },
  });
  
  theme = createTheme(theme, {
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1334, // custom lg breakpoint
        xl: 1536,
      },
    },
    typography: {
      button: {
        fontSize: 18,
        fontWeight: 700,
        lineHeight: 1.7,
      },
      h1: {
        margin: 0,
        [`${theme.breakpoints.up("md")}`]: {
          fontSize: "5.25rem",
        },
        [`${theme.breakpoints.down("md")}`]: {
          fontSize: "3rem",
        },
      },
      subtitle1: {
        [`${theme.breakpoints.down("lg")}`]: {
          fontSize: "1.25rem",
        },
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            border: "4px solid #E5E5E5",
            borderRadius: "15px",
            color: "white",
            padding: "14px 37.5px",
            textTransform: "uppercase",
            lineHeight: "20px",
            letterSpacing: "0.29em",
            position: "relative",
            [`${theme.breakpoints.up("md")}`]: {
              fontSize: "16px",
            },
            [`${theme.breakpoints.down("md")}`]: {
              fontSize: "12px",
            },
          },
          sizeSmall: {
            fontSize: "0.75rem",
          },
        },
      },
      MuiInputs: {
        styleOverrides: {
            underline: {
                "&&:hover::before": {
                  borderColor: "red"
                }
              }
        }
      },
      MuiLink: {
        styleOverrides: {
          root: {
            cursor: "pointer",
            textDecorationColor: "currentColor",
          }
        }
      },
    },
  });
  
  export default theme;
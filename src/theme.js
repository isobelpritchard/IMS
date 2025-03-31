import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material";

// TODO: edit colours to be light and dark mode in my theme!!!!
// REWATCH VID IF NEEDED

// colour design tokens
export const tokens = (mode) => ({
  ...(mode === "dark"
    ? {
        grey: {
          100: "#dddddd",
          200: "#bbbaba",
          300: "#999898",
          400: "#777575",
          500: "#555353",
          600: "#444242",
          700: "#333232",
          800: "#222121",
          900: "#111111",
        },
        primary: {
          100: "#fff7f7",
          200: "#fff0f0",
          300: "#ffe8e8",
          400: "#ffe1e1",
          500: "#ffd9d9",
          600: "#ccaeae",
          700: "#998282",
          800: "#665757",
          900: "#332b2b",
        },
      }
    : {
        grey: {
          100: "#111111",
          200: "#222121",
          300: "#333232",
          400: "#444242",
          500: "#555353",
          600: "#777575",
          700: "#999898",
          800: "#bbbaba",
          900: "#dddddd",
        },
        primary: {
          100: "#332b2b",
          200: "#665757",
          300: "#998282",
          400: "#ccaeae",
          500: "#ffd9d9",
          600: "#ffe1e1",
          700: "#ffe8e8",
          800: "#fff0f0",
          900: "#fff7f7",
        },
      }),
});

// mui theme settings
export const themeSettings = (mode) => {
  const colours = tokens(mode);

  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            primary: {
              main: colours.primary[500],
            },
            secondary: {
              main: colours.grey[500],
            },
            neutral: {
              dark: colours.grey[700],
              main: colours.grey[500],
              light: colours.grey[100],
            },
            background: {
              default: colours.primary[500],
            },
          }
        : {
            primary: {
              main: colours.primary[100],
            },
            secondary: {
              main: colours.grey[500],
            },
            neutral: {
              dark: colours.grey[700],
              main: colours.grey[500],
              light: colours.grey[100],
            },
            background: {
              default: "#fcfcfc",
            },
          }),
    },
    typography: {
      fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};

// context for colour mode
export const ColourModeContext = createContext({
  toggleColourMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState("dark");

  const colourMode = useMemo(
    () => ({
      toggleColourMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return [theme, colourMode];
};

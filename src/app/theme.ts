import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  direction: "rtl",

  palette: {
    mode: "light",

    background: {
      default: "#FFFFFF",
      paper: "#FFFFFF",
    },

    text: {
      primary: "#111111",
      secondary: "#6B6B6B",
    },

    primary: {
      main: "#111111",
      contrastText: "#FFFFFF",
    },

    divider: "#E5E5E5",
  },

  typography: {
    fontFamily: `"Vazirmatn", "Roboto", "Arial", sans-serif`,
  },

  shape: {
    borderRadius: 12,
  },
});

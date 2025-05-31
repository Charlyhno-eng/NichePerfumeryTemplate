import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: "#f6f6f6",
      paper: "#ffffff",
    },
    text: {
      primary: "#1a1a1a",
    },
    primary: {
      main: "#1976d2",
    },
  },
  typography: {
    fontFamily: `"Geist", "Geist Mono", "Arial", sans-serif`,
  },
});

export default theme;

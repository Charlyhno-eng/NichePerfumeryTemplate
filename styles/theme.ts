import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    text: {
      primary: "#333",
    },
  },
  typography: {
    fontFamily: "var(--font-inter), sans-serif",
    h1: {
      fontFamily: "var(--font-playfair-display), serif",
    },
    h2: {
      fontFamily: "var(--font-playfair-display), serif",
    },
    h3: {
      fontFamily: "var(--font-playfair-display), serif",
    },
    h4: {
      fontFamily: "var(--font-playfair-display), serif",
    },
    h5: {
      fontFamily: "var(--font-playfair-display), serif",
    },
    h6: {
      fontFamily: "var(--font-playfair-display), serif",
    },
  },
});

export default theme;

"use client";

import { ThemeProvider, CssBaseline, GlobalStyles } from "@mui/material";
import theme from "./theme";

export default function ThemeRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles
        styles={{
          html: {
            backgroundColor: theme.palette.background.default,
          },
          body: {
            backgroundColor: theme.palette.background.default,
            color: theme.palette.text.primary,
          },
        }}
      />
      {children}
    </ThemeProvider>
  );
}

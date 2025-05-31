"use client";

import { Box, Container, Typography, Link } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: "auto",
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
      }}
    >
      <Container maxWidth="md">
        <Typography variant="body1" align="center">
          © {new Date().getFullYear()} MonSite. Tous droits réservés.
        </Typography>
        <Typography variant="body2" color="text.secondary" align="center">
          Développé avec{" "}
          <Link href="https://mui.com/" target="_blank" rel="noopener">
            MUI
          </Link>{" "}
          & Next.js
        </Typography>
      </Container>
    </Box>
  );
}

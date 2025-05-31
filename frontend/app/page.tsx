"use client";

import * as React from "react";
import { Box, Typography, Button } from "@mui/material";

export default function HomePage() {
  return (
    <Box
      sx={{
        flexGrow: 1,
        minHeight: "100vh",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        color: "white",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        },
        position: "relative",
        zIndex: 1,
        padding: "2rem",
      }}
    >
      <Typography variant="h2" gutterBottom sx={{ fontWeight: "bold" }}>
        Découvrez l&apos;Art du Parfum de Niche
      </Typography>
      <Typography variant="h5" sx={{ mb: 2 }}>
        Une collection exclusive de fragrances rares et raffinées.
      </Typography>
      <Button variant="contained" color="primary" size="large">
        Explorer la Collection
      </Button>
    </Box>
  );
}

"use client";

import React from "react";
import { Box, Typography } from "@mui/material";

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 6,
        mt: "auto",
        backgroundColor: "transparent",
        borderTop: "1px solid rgba(0, 0, 0, 0.12)",
      }}
    >
      <Typography>footer</Typography>
    </Box>
  );
};

export default Footer;

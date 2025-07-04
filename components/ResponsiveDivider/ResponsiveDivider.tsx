import React from "react";
import { Box, Divider } from "@mui/material";

export default function ResponsiveDivider() {
  return (
    <>
      {/* Divider horizontal (mobile) */}
      <Box sx={{ display: { xs: "block", md: "none" }, width: "100%" }}>
        <Divider orientation="horizontal" sx={{ my: 2 }} />
      </Box>

      {/* Divider vertical (desktop) */}
      <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "stretch" }}>
        <Divider orientation="vertical" flexItem />
      </Box>
    </>
  );
}

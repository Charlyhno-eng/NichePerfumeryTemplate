import { Button, Typography } from "@mui/material";
import React from "react";

interface CustomButtonProps {
  onClick?: () => void;
  typographyVariant?:
    | "body1"
    | "body2"
    | "button"
    | "caption"
    | "subtitle1"
    | "subtitle2"
    | "h6";
  children: React.ReactNode;
}

export default function CustomButton({
  onClick,
  typographyVariant = "body2",
  children,
}: CustomButtonProps) {
  return (
    <Button
      variant="outlined"
      size="small"
      onClick={onClick}
      disableElevation
      sx={{
        mt: 2,
        px: 2,
        py: 1,
        borderColor: "black",
        color: "black",
        "&:hover": {
          borderColor: "white",
          backgroundColor: "rgba(230,0,0,0.8)",
          color: "white",
        },
      }}
    >
      <Typography
        variant={typographyVariant}
        fontWeight={200}
        sx={{ color: "inherit" }}
      >
        {children}
      </Typography>
    </Button>
  );
}

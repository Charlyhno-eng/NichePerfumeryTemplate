import React from "react";
import { Button, ButtonProps } from "@mui/material";

export default function RoundedButton(props: ButtonProps) {
  return (
    <Button
      variant="contained"
      fullWidth
      sx={{
        textTransform: "none",
        borderRadius: "25px",
        bgcolor: "black",
        fontSize: "0.85rem",
        py: 1,
        ":hover": {
          bgcolor: "#333",
        },
        ...props.sx,
      }}
      {...props}
    >
      {props.children}
    </Button>
  );
}

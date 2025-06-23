import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const style = {
  position: "absolute" as const,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
  gap: 2,
  alignItems: "center",
};

type ProfileModalProps = {
  open: boolean;
  onClose: () => void;
};

export default function ProfileModal({ open, onClose }: ProfileModalProps) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Box sx={style}>
        <Button
          variant="contained"
          sx={{ textTransform: "uppercase", width: "100%" }}
        >
          Connexion
        </Button>
        <Button
          variant="outlined"
          sx={{ textTransform: "uppercase", width: "100%" }}
        >
          Créez votre compte
        </Button>
      </Box>
    </Modal>
  );
}

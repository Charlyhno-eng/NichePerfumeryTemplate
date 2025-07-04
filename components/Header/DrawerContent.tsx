import { Box, IconButton, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

type DrawerContentProps = {
  onClose: () => void;
  width?: string;
};

export default function DrawerContent({
  onClose,
  width = "25vw",
}: DrawerContentProps) {
  return (
    <Box
      sx={{
        width,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        bgcolor: "background.paper",
      }}
      role="presentation"
    >
      <IconButton
        onClick={onClose}
        sx={{ position: "absolute", top: 8, right: 8 }}
        aria-label="Fermer"
      >
        <CloseIcon />
      </IconButton>

      <Box sx={{ p: 4, mt: 4 }}>
        <Typography variant="h5">Votre panier</Typography>
      </Box>
    </Box>
  );
}

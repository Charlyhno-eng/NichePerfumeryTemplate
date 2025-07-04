import * as React from "react";
import {
  Box,
  Modal,
  Typography,
  TextField,
  Checkbox,
  FormControlLabel,
  Slide,
} from "@mui/material";
import RoundedButton from "@/components/buttons/RoundedButton/RoundedButton";
import ResponsiveDivider from "@/components/ResponsiveDivider/ResponsiveDivider";

type ProfileModalProps = {
  open: boolean;
  onClose: () => void;
};

export default function ProfileModal({ open, onClose }: ProfileModalProps) {
  return (
    <Modal open={open} onClose={onClose}>
      <Slide in={open} direction="down" timeout={600}>
        <Box
          sx={{
            position: "absolute",
            width: "100%",
            bgcolor: "background.paper",
            p: 4,
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            gap: 4,
          }}
        >
          <Box sx={{ flex: 1 }}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Nouveaux clients
            </Typography>
            <Typography variant="body2" sx={{ mb: 6 }}>
              Créez un compte pour accélérer le processus d’enregistrement lors
              des prochains achats et recevoir des offres spéciales.
            </Typography>
            <RoundedButton>S’inscrire</RoundedButton>
          </Box>

          <ResponsiveDivider />

          <Box sx={{ flex: 1 }}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Clients enregistrés
            </Typography>
            <TextField
              fullWidth
              label="Identifiant ou e-mail"
              variant="standard"
              sx={{ mb: 1 }}
            />
            <TextField
              fullWidth
              label="Mot de passe"
              type="password"
              variant="standard"
              sx={{ mb: 1 }}
            />
            <Box
              sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}
            >
              <Typography variant="body2" color="text.secondary">
                Mot de passe oublié
              </Typography>
            </Box>
            <FormControlLabel
              control={<Checkbox />}
              label="Se souvenir de moi"
              sx={{ mb: 2 }}
            />
            <RoundedButton>Se connecter</RoundedButton>
          </Box>
        </Box>
      </Slide>
    </Modal>
  );
}

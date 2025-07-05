import React, { useState, useEffect } from "react";
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
  const [error, setError] = useState("");
  const [remember, setRemember] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (!open) return;

    (async () => {
      try {
        const res = await fetch("/api/auth/me");
        setIsLoggedIn(res.ok);
      } catch {
        setIsLoggedIn(false);
      }
    })();
  }, [open]);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email")?.toString() || "";
    const password = formData.get("password")?.toString() || "";

    if (!email || !password) {
      setError("Veuillez remplir tous les champs.");
      return;
    }

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, remember }),
      });
      if (res.ok) {
        setIsLoggedIn(true);
      } else {
        const data = await res.json();
        setError(data.message || "Erreur inconnue");
      }
    } catch {
      setError("Erreur réseau ou serveur.");
    }
  };

  const handleLogout = async () => {
    try {
      const res = await fetch("/api/auth/logout", { method: "POST" });
      if (res.ok) {
        setIsLoggedIn(false);
        onClose();
      } else {
        setError("Erreur lors de la déconnexion.");
      }
    } catch {
      setError("Erreur réseau lors de la déconnexion.");
    }
  };

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
            justifyContent: "center",
            alignItems: "center",
            gap: 4,
          }}
        >
          {isLoggedIn ? (
            <Box textAlign="center">
              <Typography variant="h6" gutterBottom>
                Vous êtes connecté
              </Typography>
              <RoundedButton onClick={handleLogout}>Déconnexion</RoundedButton>
            </Box>
          ) : (
            <Box
              component="form"
              onSubmit={handleLogin}
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                justifyContent: "space-between",
                gap: 4,
                width: "100%",
              }}
            >
              <Box sx={{ flex: 1 }}>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  Nouveaux clients
                </Typography>
                <Typography variant="body2" sx={{ mb: 6 }}>
                  Créez un compte pour accélérer le processus d’enregistrement
                  lors des prochains achats et recevoir des offres spéciales.
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
                  name="email"
                  sx={{ mb: 1 }}
                  autoComplete="username"
                />
                <TextField
                  fullWidth
                  label="Mot de passe"
                  type="password"
                  variant="standard"
                  name="password"
                  sx={{ mb: 1 }}
                  autoComplete="current-password"
                />

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mb: 2,
                  }}
                >
                  <Typography variant="body2" color="text.secondary">
                    Mot de passe oublié
                  </Typography>
                </Box>

                <FormControlLabel
                  control={
                    <Checkbox
                      checked={remember}
                      onChange={(e) => setRemember(e.target.checked)}
                      name="remember"
                    />
                  }
                  label="Se souvenir de moi"
                  sx={{ mb: 2 }}
                />

                {error && (
                  <Typography variant="body2" color="error" sx={{ mb: 1 }}>
                    {error}
                  </Typography>
                )}

                <RoundedButton type="submit">Se connecter</RoundedButton>
              </Box>
            </Box>
          )}
        </Box>
      </Slide>
    </Modal>
  );
}

"use client";

import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  IconButton,
  Divider,
  Link,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{ backgroundColor: "#eee", mt: 4, pt: 4, pb: 4 }}
    >
      <Container maxWidth="lg">
        {/* Newsletter */}
        <Box textAlign="center" mb={6}>
          <Typography variant="h6" fontWeight="300" gutterBottom>
            Newsletter
          </Typography>
          <Typography variant="body2" color="text.secondary" mb={2}>
            Abonnez-vous pour suivre notre actualité
          </Typography>
          <Box
            component="form"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              maxWidth: 400,
              mx: "auto",
              borderBottom: 1,
              borderColor: "grey.400",
            }}
          >
            <TextField
              variant="standard"
              placeholder="Email"
              fullWidth
              InputProps={{ disableUnderline: true }}
              sx={{ flex: 1 }}
            />
            <IconButton type="submit">
              <ArrowForwardIcon />
            </IconButton>
          </Box>
          <Typography variant="caption" mt={1} display="block">
            Consultez la{" "}
            <Link href="#" underline="hover">
              politique de confidentialité
            </Link>
          </Typography>
        </Box>

        <Divider sx={{ my: 4 }} />

        <Box display="flex" justifyContent="center">
          <Grid
            container
            spacing={4}
            sx={{ maxWidth: 1000 }}
            justifyContent="center"
          >
            <Grid item xs={6} sm={3}>
              <Typography variant="subtitle2" gutterBottom>
                Boutiques
              </Typography>
              <Link href="#" variant="body2" display="block" underline="none">
                Boutiques
              </Link>
            </Grid>

            <Grid item xs={6} sm={3}>
              <Typography variant="subtitle2" gutterBottom>
                Service Client
              </Typography>
              {[
                "Contact",
                "FAQ",
                "Livraison & retours",
                "Les amis de la maison",
              ].map((text) => (
                <Link
                  key={text}
                  href="#"
                  variant="body2"
                  display="block"
                  underline="none"
                >
                  {text}
                </Link>
              ))}
            </Grid>

            <Grid item xs={6} sm={3}>
              <Typography variant="subtitle2" gutterBottom>
                Mentions légales
              </Typography>
              {[
                "Conditions générales de vente",
                "Conditions générales du programme de fidélité",
                "Politique de vie privée",
                "Crédits",
                "Environnement",
                "Politique des cookies",
                "Index d’égalité femmes-hommes",
                "Gestion des cookies",
              ].map((text) => (
                <Link
                  key={text}
                  href="#"
                  variant="body2"
                  display="block"
                  underline="none"
                >
                  {text}
                </Link>
              ))}
            </Grid>

            <Grid item xs={6} sm={3}>
              <Typography variant="subtitle2" gutterBottom>
                Social
              </Typography>
              {["Instagram", "TikTok", "Facebook", "YouTube", "LinkedIn"].map(
                (text) => (
                  <Link
                    key={text}
                    href="#"
                    variant="body2"
                    display="block"
                    underline="none"
                  >
                    {text}
                  </Link>
                ),
              )}
            </Grid>
          </Grid>
        </Box>

        <Divider sx={{ my: 4 }} />

        {/* Bas de page */}
        <Box
          display="flex"
          flexDirection={{ xs: "column", sm: "row" }}
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="caption" color="text.secondary">
            Tous droits réservés
          </Typography>
          <Box mt={{ xs: 2, sm: 0 }}>
            <Typography variant="caption" color="text.secondary" sx={{ mr: 2 }}>
              /EUR
            </Typography>
            <Link href="#" variant="caption" underline="hover">
              Plan du site
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

import React from "react";
import { Box, Container, Grid, TextField } from "@mui/material";

const fieldsSize6 = [
  { label: "Prénom", required: true },
  { label: "Nom", required: true },
  { label: "E-mail", required: true },
  { label: "Numéro de commande", required: false },
];

const fieldsSize12 = [
  { label: "Objet", required: true },
  { label: "Message", required: true, multiline: true, rows: 6 },
];

export default function ContactPage() {
  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Box component="form" noValidate autoComplete="off" sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {fieldsSize6.map((field, index) => (
            <Grid size={6} key={`field-${index}`}>
              <TextField
                id="standard-basic"
                label={field.label}
                variant="standard"
                required={field.required}
                sx={{ width: "100%", mt: 2 }}
              />
            </Grid>
          ))}

          {fieldsSize12.map((field, index) => (
            <Grid size={12} key={`field-${index}`}>
              <TextField
                id="standard-basic"
                label={field.label}
                variant="standard"
                required={field.required}
                multiline={field.multiline || false}
                rows={field.rows || undefined}
                sx={{ width: "100%", mt: 2 }}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}

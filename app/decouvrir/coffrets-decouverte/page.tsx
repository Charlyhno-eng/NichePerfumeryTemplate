import {
  Container,
  Grid,
  Typography,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import BasicButton from "@/components/buttons/BasicButton/BasicButton";

const parfums = [
  {
    title: "Tubéreuse",
    subtitle: "Astrale",
    description: "Extrait de parfum",
    price: "25,00€ - 350,00€",
  },
  {
    title: "Safran",
    subtitle: "Secret",
    description: "Extrait de parfum",
    price: "30,00€ - 215,00€",
  },
  {
    title: "Coffret découverte",
    subtitle: "Extraits de parfum",
    description: "8 x 1,5 ml",
    price: "40,00€",
  },
];

export default function CoffretsDecouvertesPage() {
  return (
    <Container sx={{ py: 6 }}>
      <Typography variant="h4" gutterBottom>
        Nouveautés
      </Typography>
      <Grid container spacing={6}>
        {parfums.map((parfum, index) => (
          <Grid key={index} size={{ xs: 12, sm: 6, md: 3 }}>
            <Card>
              <CardMedia
                component="img"
                height="240"
                image="/image_template1.jpg"
                alt={parfum.title}
              />
              <CardContent>
                <Typography variant="subtitle2" color="secondary">
                  nouveauté
                </Typography>
                <Typography variant="h6">{parfum.title}</Typography>
                <Typography variant="h6" fontStyle="italic">
                  {parfum.subtitle}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {parfum.description}
                </Typography>
                <Typography variant="body2" color="text.primary" sx={{ mt: 1 }}>
                  {parfum.price}
                </Typography>
                <BasicButton>EN SAVOIR PLUS</BasicButton>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

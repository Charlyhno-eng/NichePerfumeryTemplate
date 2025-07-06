import { Box, Container, Grid, Typography } from "@mui/material";

const sections = [
  {
    title: "Lorem",
    subtitle: "Ipsum",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
    image: "/image_template1.jpg",
    reverse: false,
  },
  {
    title: "Dolor",
    subtitle: "Sit Amet",
    description: `Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.

Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    image: "/image_template1.jpg",
    reverse: true,
  },
  {
    title: "Lorem",
    subtitle: "Ipsum",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
    image: "/image_template1.jpg",
    reverse: false,
  },
];

export default function FondateursPage() {
  return (
    <Container sx={{ py: 6 }}>
      {sections.map((section, index) => (
        <Grid
          container
          spacing={4}
          key={index}
          direction={section.reverse ? "row" : "row-reverse"}
          alignItems="center"
          sx={{ mb: 10 }}
        >
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              component="img"
              src={section.image}
              alt={`${section.title} ${section.subtitle}`}
              sx={{
                width: "100%",
                height: "auto",
                objectFit: "cover",
                display: "block",
              }}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: section.reverse ? "flex-end" : "flex-start",
              }}
            >
              <Typography
                variant="h4"
                component="h2"
                fontWeight="bold"
                gutterBottom
              >
                {section.title}{" "}
                <Box component="span" fontStyle="italic">
                  {section.subtitle}
                </Box>
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                whiteSpace="pre-line"
                textAlign={section.reverse ? "right" : "left"}
                fontWeight={200}
              >
                {section.description}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      ))}
    </Container>
  );
}

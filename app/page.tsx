import { Box, Typography } from "@mui/material";
import BasicSelect from "../components/select/BasicSelect";

export default function Home() {
  return (
    <Box>
      <Typography variant="h1">Playfair Display</Typography>
      <Typography>Inter</Typography>
      <BasicSelect />
    </Box>
  );
}

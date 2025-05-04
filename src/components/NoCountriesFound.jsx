import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import { Container, Typography } from "@mui/material";

 const NoCountriesFound = () => {
  return (
    <Container maxWidth="sm" sx={{ textAlign: "center", py: 8 }}>
      <SentimentDissatisfiedIcon
        color="disabled"
        sx={{ fontSize: 72, mb: 2, opacity: 0.5 }}
      />
      <Typography variant="h5" sx={{ mb: 1, fontWeight: 600 }}>
        No countries found
      </Typography>
      <Typography variant="body1" color="text.secondary">
        Try adjusting your search or filter criteria.
      </Typography>
    </Container>
  );
}

export default NoCountriesFound;
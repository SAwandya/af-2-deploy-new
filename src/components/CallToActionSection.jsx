import React from "react";
import { Container, Paper, Typography, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const CallToActionSection = () => {
  const theme = useTheme();
  return (
    <Container maxWidth="md" sx={{ mb: 10, textAlign: "center" }}>
      <Paper
        elevation={4}
        sx={{
          p: { xs: 4, md: 6 },
          borderRadius: 4,
          background: "linear-gradient(135deg, #80cbc4 0%, #b39ddb 100%)",
          color: "white",
        }}
      >
        <Typography variant="h4" gutterBottom fontWeight="bold">
          Ready to Explore?
        </Typography>
        <Typography
          variant="body1"
          sx={{ mb: 4, maxWidth: "600px", mx: "auto" }}
        >
          Discover detailed information about countries, their cultures,
          languages, and more. Start your journey around the world today!
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          sx={{
            px: 4,
            py: 1.5,
            borderRadius: 8,
            backgroundColor: "white",
            color: theme.palette.primary.main,
            fontWeight: 600,
            "&:hover": {
              backgroundColor: "rgba(255,255,255,0.9)",
            },
          }}
          href="/countries"
        >
          Get Started
        </Button>
      </Paper>
    </Container>
  );
};

export default CallToActionSection;

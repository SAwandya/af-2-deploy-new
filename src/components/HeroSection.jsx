import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import PublicIcon from "@mui/icons-material/Public";
import ExploreIcon from "@mui/icons-material/Explore";

const HeroSection = () => {
  // Function to handle smooth scroll
  const handleStartExploring = (e) => {
    e.preventDefault();
    // Scroll down by 500px (adjust as needed)
    window.scrollTo({
      top: window.scrollY + 500,
      behavior: "smooth",
    });
  };

  return (
    <Box
      sx={{
        py: { xs: 6, md: 10 },
        background: "linear-gradient(135deg, #80cbc4 0%, #b39ddb 100%)",
        color: "#fff",
        textAlign: "center",
        borderRadius: { md: "0 0 24px 24px" },
        boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="md">
        <PublicIcon sx={{ fontSize: 56, mb: 2, opacity: 0.9 }} />
        <Typography
          variant="h1"
          gutterBottom
          sx={{ fontWeight: 700, letterSpacing: "-1px" }}
        >
          Explore Our World
        </Typography>
        <Typography variant="h5" sx={{ mb: 4, opacity: 0.95 }}>
          Discover countries, cultures, and facts from around the globe.
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          startIcon={<ExploreIcon />}
          sx={{
            boxShadow: 3,
            px: 4,
            py: 1.5,
            borderRadius: 8,
            fontWeight: 600,
            fontSize: "1.1rem",
            transition: "transform 0.2s",
            "&:hover": { transform: "translateY(-3px)" },
          }}
          onClick={handleStartExploring}
        >
          Start Exploring
        </Button>
      </Container>
    </Box>
  );
};

export default HeroSection;

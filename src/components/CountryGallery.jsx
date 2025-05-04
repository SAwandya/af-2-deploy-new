// components/CountryGallery.jsx
import React from "react";
import { Paper, Typography, Box, Grid } from "@mui/material";
import { motion } from "framer-motion";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";

// This component would ideally fetch images from an API
// For now, we'll use Unsplash with the country name as a search term
const CountryGallery = ({ countryName }) => {
  // Generate some placeholder image URLs based on the country name
  const generateImageUrls = (country, count = 6) => {
    return Array.from(
      { length: count },
      (_, i) => `https://source.unsplash.com/600x400/?${country}&sig=${i + 1}`
    );
  };


  const images = generateImageUrls(countryName);

  return (
    <Paper
      component={motion.div}
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      elevation={3}
      sx={{
        p: 4,
        borderRadius: 5,
        mb: 4,
        background: "rgba(255,255,255,0.9)",
        backdropFilter: "blur(10px)",
        boxShadow:
          "0 8px 32px rgba(128,203,196,0.1), 0 2px 8px rgba(128,203,196,0.08)",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
        <PhotoLibraryIcon color="primary" sx={{ mr: 1, fontSize: 28 }} />
        <Typography variant="h6">Gallery</Typography>
      </Box>

      <Grid container spacing={2}>
        {images.map((imageUrl, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box
              component={motion.div}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
                transition: { duration: 0.3 },
              }}
              sx={{
                borderRadius: 3,
                overflow: "hidden",
                height: 200,
                boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
                transition: "all 0.3s",
              }}
            >
              <Box
                component="img"
                src={imageUrl}
                alt={`${countryName} image ${index + 1}`}
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};

export default CountryGallery;

// components/CountryMap.jsx
import React from "react";
import { Paper, Typography, Box, Button, Link } from "@mui/material";
import { motion } from "framer-motion";
import MapIcon from "@mui/icons-material/Map";
import LaunchIcon from "@mui/icons-material/Launch";

const CountryMap = ({ country }) => {
  return (
    <Paper
      component={motion.div}
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
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
        <MapIcon color="primary" sx={{ mr: 1, fontSize: 28 }} />
        <Typography variant="h6">Location</Typography>
      </Box>

      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: 400,
          borderRadius: 4,
          overflow: "hidden",
          mb: 2,
        }}
      >
        <iframe
          width="100%"
          height="100%"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          src={`https://maps.google.com/maps?q=${country.latlng[0]},${country.latlng[1]}&z=5&output=embed`}
          title={`Map of ${country.name.common}`}
          style={{ border: 0 }}
        ></iframe>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 2,
        }}
      >
        <Box>
          <Typography variant="body2" color="text.secondary">
            <strong>Latitude/Longitude:</strong> {country.latlng.join(", ")}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button
            variant="outlined"
            startIcon={<LaunchIcon />}
            component={Link}
            href={country.maps.googleMaps}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              borderRadius: 4,
              textTransform: "none",
              fontWeight: 600,
            }}
          >
            Google Maps
          </Button>
          <Button
            variant="outlined"
            startIcon={<LaunchIcon />}
            component={Link}
            href={country.maps.openStreetMaps}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              borderRadius: 4,
              textTransform: "none",
              fontWeight: 600,
            }}
          >
            OpenStreetMap
          </Button>
        </Box>
      </Box>
    </Paper>
  );
};

export default CountryMap;

// components/CountryBasicInfo.jsx
import React from "react";
import { Grid, Paper, Typography, Box, Chip } from "@mui/material";
import { motion } from "framer-motion";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PeopleIcon from "@mui/icons-material/People";
import LanguageIcon from "@mui/icons-material/Language";
import PublicIcon from "@mui/icons-material/Public";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

const CountryBasicInfo = ({ country }) => {
  // Format population with commas
  const formatPopulation = (pop) => {
    return pop.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  // Get languages as array
  const languages = Object.values(country.languages || {});

  return (
    <Paper
      component={motion.div}
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
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
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
            <LocationOnIcon color="primary" sx={{ mr: 1, fontSize: 28 }} />
            <Typography variant="h6">Region & Capital</Typography>
          </Box>
          <Typography variant="body1" sx={{ mb: 1 }}>
            <strong>Region:</strong> {country.region}
          </Typography>
          <Typography variant="body1" sx={{ mb: 1 }}>
            <strong>Subregion:</strong> {country.subregion || "N/A"}
          </Typography>
          <Typography variant="body1">
            <strong>Capital:</strong> {country.capital?.[0] || "N/A"}
          </Typography>
        </Grid>

        <Grid item xs={12} md={4}>
          <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
            <PeopleIcon color="primary" sx={{ mr: 1, fontSize: 28 }} />
            <Typography variant="h6">Population & Area</Typography>
          </Box>
          <Typography variant="body1" sx={{ mb: 1 }}>
            <strong>Population:</strong> {formatPopulation(country.population)}
          </Typography>
          <Typography variant="body1">
            <strong>Area:</strong> {formatPopulation(country.area)} km²
          </Typography>
        </Grid>

        <Grid item xs={12} md={4}>
          <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
            <AttachMoneyIcon color="primary" sx={{ mr: 1, fontSize: 28 }} />
            <Typography variant="h6">Currency</Typography>
          </Box>
          {country.currencies ? (
            Object.entries(country.currencies).map(([code, currency]) => (
              <Typography key={code} variant="body1" sx={{ mb: 1 }}>
                <strong>{currency.name}</strong> ({currency.symbol})
              </Typography>
            ))
          ) : (
            <Typography variant="body1">No currency data available</Typography>
          )}
        </Grid>

        <Grid item xs={12} sx={{ mt: 2 }}>
          <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
            <LanguageIcon color="primary" sx={{ mr: 1, fontSize: 28 }} />
            <Typography variant="h6">Languages</Typography>
          </Box>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
            {languages.length > 0 ? (
              languages.map((language) => (
                <Chip
                  key={language}
                  label={language}
                  color="primary"
                  variant="outlined"
                  sx={{
                    borderRadius: 4,
                    px: 1,
                    background:
                      "linear-gradient(90deg, rgba(128,203,196,0.1) 0%, rgba(179,157,219,0.1) 100%)",
                  }}
                />
              ))
            ) : (
              <Typography variant="body1">
                No language data available
              </Typography>
            )}
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default CountryBasicInfo;

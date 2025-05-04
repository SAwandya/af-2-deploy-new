// components/BorderingCountries.jsx
import React, { useEffect, useState } from "react";
import { Paper, Typography, Box, Grid, Skeleton, Button } from "@mui/material";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import BorderAllIcon from "@mui/icons-material/BorderAll";

// Import API service
import { getCountryByCode } from "../api/countryService";

const BorderingCountries = ({ borders }) => {
  const [borderCountries, setBorderCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!borders || borders.length === 0) {
      setLoading(false);
      return;
    }

    const fetchBorderCountries = async () => {
      try {
        const promises = borders.map((code) => getCountryByCode(code));
        const responses = await Promise.all(promises);
        const countries = responses.map((response) => response.data[0]);
        setBorderCountries(countries);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching border countries:", error);
        setLoading(false);
      }
    };

    fetchBorderCountries();
  }, [borders]);

  if (!borders || borders.length === 0) {
    return null;
  }

  return (
    <Paper
      component={motion.div}
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
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
        <BorderAllIcon color="primary" sx={{ mr: 1, fontSize: 28 }} />
        <Typography variant="h6">Bordering Countries</Typography>
      </Box>

      <Grid container spacing={2}>
        {loading
          ? // Skeleton loaders while fetching
            Array.from(new Array(borders.length)).map((_, index) => (
              <Grid item xs={6} sm={4} md={3} key={index}>
                <Skeleton
                  variant="rectangular"
                  height={60}
                  sx={{ borderRadius: 2 }}
                  data-testid="border-skeleton"
                />
              </Grid>
            ))
          : // Actual border countries
            borderCountries.map((country) => (
              <Grid item xs={6} sm={4} md={3} key={country.cca3}>
                <Button
                  component={Link}
                  to={`/countries/${country.name.common.toLowerCase()}`}
                  variant="outlined"
                  fullWidth
                  sx={{
                    p: 2,
                    height: "100%",
                    borderRadius: 3,
                    textTransform: "none",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 1,
                    transition: "all 0.3s",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      boxShadow: "0 5px 15px rgba(128,203,196,0.2)",
                    },
                  }}
                >
                  <Box
                    component="img"
                    src={country.flags.png}
                    alt={country.flags.alt || `Flag of ${country.name.common}`}
                    sx={{
                      width: 60,
                      height: "auto",
                      borderRadius: 1,
                      mb: 1,
                    }}
                  />
                  <Typography variant="body2" fontWeight={600}>
                    {country.name.common}
                  </Typography>
                </Button>
              </Grid>
            ))}
      </Grid>
    </Paper>
  );
};

export default BorderingCountries;

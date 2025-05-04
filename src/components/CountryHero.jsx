// components/CountryHero.jsx
import React from "react";
import { Box, Typography, Paper } from "@mui/material";
import { motion } from "framer-motion";

const CountryHero = ({ country }) => {
  return (
    <Paper
      component={motion.div}
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      elevation={0}
      sx={{
        position: "relative",
        height: 400,
        borderRadius: 5,
        overflow: "hidden",
        mb: 4,
        backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.6)), url(${country.flags.png})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.15)",
      }}
    >
      <Box sx={{ p: 5, display: "flex", alignItems: "center" }}>
        <Box
          component="img"
          src={country.flags.png}
          alt={country.flags.alt || `Flag of ${country.name.common}`}
          sx={{
            width: 120,
            height: "auto",
            borderRadius: 3,
            boxShadow: "0 5px 15px rgba(0, 0, 0, 0.2)",
            border: "3px solid white",
          }}
        />
        <Box sx={{ ml: 3, color: "white" }}>
          <Typography
            variant="h2"
            component="h1"
            sx={{ fontWeight: 700, textShadow: "0 2px 4px rgba(0,0,0,0.5)" }}
            id="country-common-name"
          >
            {country.name.common}
          </Typography>

          <Typography
            variant="h5"
            component="h2"
            id="country-official-name"
            aria-label={`Official name: ${country.name.official}`} // screen reader label is distinct
            sx={{ textShadow: "0 2px 4px rgba(0,0,0,0.5)" }}
          >
            <span aria-hidden="true">{country.name.official}</span>{" "}
            {/* visible only */}
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
};

export default CountryHero;

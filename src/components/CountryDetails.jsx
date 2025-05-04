// components/CountryDetails.jsx
import React from "react";
import { Paper, Typography, Box, Grid, Divider } from "@mui/material";
import { motion } from "framer-motion";
import InfoIcon from "@mui/icons-material/Info";
import PublicIcon from "@mui/icons-material/Public";
import FlagIcon from "@mui/icons-material/Flag";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const CountryDetails = ({ country }) => {
  return (
    <Paper
      component={motion.div}
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.4 }}
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
        <InfoIcon color="primary" sx={{ mr: 1, fontSize: 28 }} />
        <Typography variant="h6">Additional Information</Typography>
      </Box>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Box sx={{ mb: 3 }}>
            <Typography
              variant="subtitle1"
              color="primary"
              fontWeight={600}
              gutterBottom
            >
              <PublicIcon
                sx={{ fontSize: 20, mr: 1, verticalAlign: "text-bottom" }}
              />
              Continental Information
            </Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>
              <strong>Continent:</strong>{" "}
              {Object.values(country.continents ?? {}).join(", ")}
            </Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>
              <strong>UN Member:</strong> {country.unMember ? "Yes" : "No" || "Not Available"}
            </Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>
              <strong>Independent:</strong> {country.independent ? "Yes" : "No" || "Not Available"}
            </Typography>
            <Typography variant="body1">
              <strong>Landlocked:</strong> {country.landlocked ? "Yes" : "No" || "Not Available"}
            </Typography>
          </Box>

          <Box sx={{ mb: 3 }}>
            <Typography
              variant="subtitle1"
              color="primary"
              fontWeight={600}
              gutterBottom
            >
              <FlagIcon
                sx={{ fontSize: 20, mr: 1, verticalAlign: "text-bottom" }}
              />
              Country Codes
            </Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>
              <strong>Alpha-2 Code:</strong> {country.cca2}
            </Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>
              <strong>Alpha-3 Code:</strong> {country.cca3}
            </Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>
              <strong>Numeric Code:</strong> {country.ccn3}
            </Typography>
            {country.cioc && (
              <Typography variant="body1">
                <strong>IOC Code:</strong> {country.cioc}
              </Typography>
            )}
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box sx={{ mb: 3 }}>
            <Typography
              variant="subtitle1"
              color="primary"
              fontWeight={600}
              gutterBottom
            >
              <DirectionsCarIcon
                sx={{ fontSize: 20, mr: 1, verticalAlign: "text-bottom" }}
              />
              Driving Information
            </Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>
              <strong>Driving Side:</strong> {country.car.side}
            </Typography>
            <Typography variant="body1">
              <strong>Car Signs:</strong> {Object.values(country.car.signs ?? {}).join(", ")}
            </Typography>
          </Box>

          <Box sx={{ mb: 3 }}>
            <Typography
              variant="subtitle1"
              color="primary"
              fontWeight={600}
              gutterBottom
            >
              <AccessTimeIcon
                sx={{ fontSize: 20, mr: 1, verticalAlign: "text-bottom" }}
              />
              Time & Week
            </Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>
              <strong>Timezones:</strong> {Object.values(country.timezones ?? {}).join(", ")}
            </Typography>
            <Typography variant="body1">
              <strong>Start of Week:</strong> {country.startOfWeek}
            </Typography>
          </Box>

          {country.coatOfArms.png && (
            <Box sx={{ textAlign: "center" }}>
              <Typography
                variant="subtitle1"
                color="primary"
                fontWeight={600}
                gutterBottom
              >
                Coat of Arms
              </Typography>
              <Box
                component="img"
                src={country.coatOfArms.png}
                alt={`Coat of Arms of ${country.name.common}`}
                sx={{
                  height: 120,
                  width: "auto",
                  maxWidth: "100%",
                  mt: 1,
                }}
              />
            </Box>
          )}
        </Grid>
      </Grid>
    </Paper>
  );
};

export default CountryDetails;

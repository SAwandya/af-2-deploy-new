// SearchFilterSection.jsx
import React from "react";
import {
  Box,
  Paper,
  Grid,
  TextField,
  InputAdornment,
  Chip,
  Autocomplete,
  useTheme,
  Typography,
  Button,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import PublicIcon from "@mui/icons-material/Public";
import LanguageIcon from "@mui/icons-material/Language";
import ClearAllIcon from "@mui/icons-material/ClearAll";
import { motion } from "framer-motion";
import useCountryFilterStore from "../store/useCountryFilterStore";

// Example data for regions and languages
const regions = [
  { label: "Africa", value: "africa" },
  { label: "Americas", value: "americas" },
  { label: "Asia", value: "asia" },
  { label: "Europe", value: "europe" },
  { label: "Oceania", value: "oceania" },
];

const languages = [
  "English",
  "Spanish",
  "French",
  "Arabic",
  "Chinese",
  "Portuguese",
  "Russian",
  "Hindi",
];

const SearchFilterSection = () => {
  const theme = useTheme();
  const {
    search,
    region: selectedRegion,
    language: selectedLanguage,
    setSearch,
    setRegion,
    setLanguage,
  } = useCountryFilterStore();

  // Show the "Clear Filters" button only if any filter is active
  const hasActiveFilters = !!(search || selectedRegion || selectedLanguage);

  // Handle search input
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  // Handle region chip click
  const handleRegionSelect = (region) => {
    setRegion(region.value);
  };

  // Handle language autocomplete
  const handleLanguageSelect = (event, value) => {
    setLanguage(value);
  };

  // Clear all filters
  const handleClearFilters = () => {
    setSearch("");
    setRegion("");
    setLanguage("");
  };

  return (
    <Box sx={{ mt: 6, mb: 8 }}>
      <Paper
        elevation={6}
        component={motion.div}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        sx={{
          p: { xs: 2, md: 4 },
          borderRadius: 5,
          background: "rgba(255,255,255,0.75)",
          backdropFilter: "blur(12px)",
          boxShadow:
            "0 8px 32px 0 rgba(128,203,196,0.12), 0 1.5px 4px rgba(128,203,196,0.09)",
          maxWidth: 1200,
          mx: "auto",
        }}
      >
        <Grid container spacing={3} alignItems="center">
          {/* Search Bar */}
          <Grid item xs={12} md={5}>
            <TextField
              fullWidth
              value={search}
              onChange={handleSearchChange}
              placeholder="Search for a country..."
              aria-label="Search for a country"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon color="primary" />
                  </InputAdornment>
                ),
                sx: {
                  borderRadius: 4,
                  background: "#fff",
                  boxShadow:
                    "0 2px 8px rgba(128,203,196,0.07), 0 1px 2px rgba(179,157,219,0.07)",
                  transition: "box-shadow 0.2s",
                  "&:focus-within": {
                    boxShadow:
                      "0 4px 16px rgba(128,203,196,0.15), 0 2px 4px rgba(179,157,219,0.13)",
                  },
                },
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: 4,
                },
              }}
            />
          </Grid>

          {/* Region Filter */}
          <Grid item xs={12} md={4}>
            <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
              <Typography
                variant="subtitle2"
                sx={{
                  color: theme.palette.primary.main,
                  fontWeight: 600,
                  display: "flex",
                  alignItems: "center",
                  mr: 1,
                }}
              >
                <PublicIcon sx={{ fontSize: 20, mr: 0.5 }} />
                Region:
              </Typography>
              {regions.map((region) => (
                <Chip
                  key={region.value}
                  label={region.label}
                  clickable
                  color={
                    selectedRegion === region.value ? "primary" : "default"
                  }
                  variant={
                    selectedRegion === region.value ? "filled" : "outlined"
                  }
                  onClick={() => handleRegionSelect(region)}
                  sx={{
                    borderRadius: 8,
                    fontWeight: 500,
                    fontSize: "0.95rem",
                    transition: "background 0.2s, color 0.2s, box-shadow 0.2s",
                    boxShadow:
                      selectedRegion === region.value
                        ? "0 2px 8px rgba(128,203,196,0.10)"
                        : "none",
                    "&:hover": {
                      background:
                        "linear-gradient(90deg, #80cbc4 0%, #b39ddb 100%)",
                      color: "#fff",
                    },
                  }}
                />
              ))}
            </Box>
          </Grid>

          {/* Language Filter */}
          <Grid item xs={12} md={3}>
            <Autocomplete
              options={languages}
              value={selectedLanguage}
              onChange={handleLanguageSelect}
              clearOnEscape
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: 4,
                  background: "#fff",
                },
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  placeholder="Language"
                  aria-label="Filter by language"
                  InputProps={{
                    ...params.InputProps,
                    startAdornment: (
                      <InputAdornment position="start">
                        <LanguageIcon color="primary" />
                      </InputAdornment>
                    ),
                  }}
                />
              )}
            />
          </Grid>

          {/* Clear Filters Button */}
          {hasActiveFilters && (
            <Grid item xs={12} md="auto">
              <Button
                variant="outlined"
                color="secondary"
                startIcon={<ClearAllIcon />}
                onClick={handleClearFilters}
                sx={{
                  borderRadius: 3,
                  fontWeight: 600,
                  ml: { md: 2 },
                  mt: { xs: 2, md: 0 },
                  background: "rgba(179,157,219,0.07)",
                  transition: "background 0.2s, color 0.2s",
                  "&:hover": {
                    background:
                      "linear-gradient(90deg, #b39ddb 0%, #80cbc4 100%)",
                    color: "white",
                  },
                }}
              >
                Clear Filters
              </Button>
            </Grid>
          )}
        </Grid>
      </Paper>
    </Box>
  );
};

export default SearchFilterSection;

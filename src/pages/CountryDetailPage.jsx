import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Box, Container, Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { motion } from "framer-motion";

import CountryHero from "../components/CountryHero";
import CountryBasicInfo from "../components/CountryBasicInfo";
import CountryMap from "../components/CountryMap";
import CountryDetails from "../components/CountryDetails";
import BorderingCountries from "../components/BorderingCountries";
import CountryGallery from "../components/CountryGallery";

import { useCountryByName } from "../hooks/useCountryByName";
import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";


const CountryDetailPage = () => {
  const { countryName } = useParams();
  const navigate = useNavigate();
 
  const { country, loading, error } = useCountryByName(countryName);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading country data</div>;
  if (!country) return <div>Country not found</div>;

  return (
    <>
      <SignedIn>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Box
            sx={{ bgcolor: "background.default", minHeight: "100vh", pb: 8 }}
          >
            <Container maxWidth="lg">
              <Button
                startIcon={<ArrowBackIcon />}
                onClick={() => navigate(-1)}
                sx={{
                  mt: 4,
                  mb: 2,
                  borderRadius: 8,
                  px: 3,
                  py: 1,
                  boxShadow: "0 2px 8px rgba(128,203,196,0.15)",
                  background:
                    "linear-gradient(90deg, #80cbc4 0%, #b39ddb 100%)",
                  color: "white",
                  "&:hover": {
                    background:
                      "linear-gradient(90deg, #b39ddb 0%, #80cbc4 100%)",
                  },
                }}
              >
                Back
              </Button>

              <CountryHero country={country} />
              <CountryBasicInfo country={country} />
              <CountryMap country={country} />
              <CountryDetails country={country} />
              <BorderingCountries borders={country.borders} />
              <CountryGallery countryName={country.name.common} />
            </Container>
          </Box>
        </motion.div>
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
};

export default CountryDetailPage;

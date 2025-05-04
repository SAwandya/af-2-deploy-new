import React, { useState } from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Avatar,
  Button,
  IconButton,
  Tooltip,
  Box,
  useTheme,
  Pagination,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PeopleIcon from "@mui/icons-material/People";
import LanguageIcon from "@mui/icons-material/Language";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useNavigate } from "react-router-dom";
import CountrySkeletonGrid from "./CountrySkeletonGrid";
import NoCountriesFound from "./NoCountriesFound";

const PAGE_SIZE = 8; // Number of countries per page

const FeaturedCountriesSection = ({ countries, loading }) => {
  const theme = useTheme();
  const navigate = useNavigate();

  // Pagination state
  const [page, setPage] = useState(1);

  // Calculate the countries to show on current page
  const paginatedCountries = countries.slice(
    (page - 1) * PAGE_SIZE,
    page * PAGE_SIZE
  );

  const pageCount = Math.ceil(countries.length / PAGE_SIZE);

  if (loading) return <CountrySkeletonGrid count={PAGE_SIZE} />;
  if (!countries || countries.length === 0) return <NoCountriesFound />;

  return (
    <Container maxWidth="lg" sx={{ mb: 8 }}>
      <Typography
        variant="h4"
        component="h2"
        sx={{
          mb: 4,
          fontWeight: 700,
          letterSpacing: "-1px",
          position: "relative",
          display: "inline-block",
          "&:after": {
            content: '""',
            position: "absolute",
            bottom: -10,
            left: 0,
            width: 60,
            height: 4,
            backgroundColor: theme.palette.primary.main,
            borderRadius: 2,
          },
        }}
      >
        🌟 Featured Countries
      </Typography>
      <Grid
        container
        spacing={4}
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "1fr 1fr",
            md: "1fr 1fr 1fr 1fr",
          },
          gap: 4,
        }}
      >
        {paginatedCountries.map((country) => (
          <Card
            key={country.name.common}
            elevation={6}
            sx={{
              borderRadius: 5,
              overflow: "hidden",
              transition: "transform 0.25s, box-shadow 0.25s",
              bgcolor: "background.paper",
              boxShadow:
                "0 8px 32px 0 rgba(128,203,196,0.10), 0 1.5px 4px rgba(128,203,196,0.09)",
              "&:hover": {
                transform: "translateY(-8px) scale(1.025)",
                boxShadow:
                  "0 16px 48px 0 rgba(128,203,196,0.15), 0 3px 8px rgba(128,203,196,0.13)",
              },
              display: "flex",
              flexDirection: "column",
              minHeight: 420,
            }}
          >
            {/* ...CardHeader, CardMedia, CardContent, CardActions as before... */}
            <CardHeader
              avatar={
                <Avatar
                  src={country.flags.png}
                  alt={`${country.name.common} flag`}
                  sx={{
                    border: `2px solid ${theme.palette.primary.main}`,
                    bgcolor: "white",
                  }}
                />
              }
              title={
                <Typography variant="h6" fontWeight={700}>
                  {country.name.common}
                </Typography>
              }
              subheader={
                <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                  <LocationOnIcon color="primary" fontSize="small" />
                  <Typography variant="body2" color="text.secondary">
                    {country.region}
                  </Typography>
                </Box>
              }
              sx={{ pb: 0 }}
            />
            <CardMedia
              component="img"
              height="140"
              image={country.flags.png}
              alt={`${country.name.common} flag`}
              sx={{
                objectFit: "cover",
                borderRadius: 3,
                mx: 2,
                my: 2,
                boxShadow: "0 3px 16px rgba(128,203,196,0.07)",
              }}
            />
            <CardContent sx={{ flexGrow: 1 }}>
              <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                <PeopleIcon color="primary" sx={{ mr: 1 }} />
                <Typography variant="body2" color="text.secondary">
                  <b>Population:</b> {country.population}
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                <LanguageIcon color="primary" sx={{ mr: 1 }} />
                <Typography variant="body2" color="text.secondary">
                  <b>Languages:</b>{" "}
                  {Object.values(country.languages ?? {}).join(", ")}
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ fontWeight: 500 }}
                >
                  <b>Capital:</b> {country.capital?.join(", ") || "N/A"}
                </Typography>
              </Box>
            </CardContent>
            <CardActions
              sx={{
                px: 2,
                pb: 2,
                pt: 0,
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Tooltip title="Add to favorites">
                <IconButton
                  sx={{
                    color: theme.palette.primary.main,
                    transition: "color 0.2s, transform 0.2s",
                    "&:hover": {
                      color: theme.palette.secondary.main,
                      transform: "scale(1.2)",
                    },
                  }}
                  aria-label={`Add ${country.name.common} to favorites`}
                >
                  <FavoriteIcon />
                </IconButton>
              </Tooltip>
              <Button
                variant="contained"
                color="primary"
                endIcon={<ArrowForwardIcon />}
                sx={{
                  textTransform: "none",
                  borderRadius: 3,
                  fontWeight: 600,
                  px: 2,
                  boxShadow: "0 2px 8px rgba(128,203,196,0.08)",
                  background:
                    "linear-gradient(90deg, #80cbc4 0%, #b39ddb 100%)",
                  color: "white",
                  "&:hover": {
                    background:
                      "linear-gradient(90deg, #b39ddb 0%, #80cbc4 100%)",
                  },
                }}
                onClick={() =>
                  navigate(`/countries/${country.name.common.toLowerCase()}`)
                }
              >
                View Details
              </Button>
            </CardActions>
          </Card>
        ))}
      </Grid>
      {/* Pagination Controls */}
      {pageCount > 1 && (
        <Box sx={{ display: "flex", justifyContent: "center", mt: 6 }}>
          <Pagination
            count={pageCount}
            page={page}
            onChange={(_, value) => setPage(value)}
            color="primary"
            size="large"
            shape="rounded"
            sx={{
              "& .MuiPaginationItem-root": {
                fontWeight: 600,
                borderRadius: 2,
                bgcolor: "background.paper",
                transition: "background 0.2s",
                "&.Mui-selected": {
                  background:
                    "linear-gradient(90deg, #80cbc4 0%, #b39ddb 100%)",
                  color: "white",
                },
              },
            }}
          />
        </Box>
      )}
    </Container>
  );
};

export default FeaturedCountriesSection;
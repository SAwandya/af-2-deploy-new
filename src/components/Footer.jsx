// EnhancedFooter.jsx
import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Link,
  IconButton,
  Divider,
  useTheme,
  useMediaQuery,
  Paper,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import PublicIcon from "@mui/icons-material/Public";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LanguageIcon from "@mui/icons-material/Language";
import ExploreIcon from "@mui/icons-material/Explore";
import InfoIcon from "@mui/icons-material/Info";

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const currentYear = new Date().getFullYear();

  return (
    <Paper
      component="footer"
      elevation={8}
      sx={{
        mt: "auto",
        position: "relative",
        overflow: "hidden",
        background: "linear-gradient(135deg, #80cbc4 0%, #b39ddb 100%)",
        color: "#fff",
        borderRadius: 0,
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "rgba(255, 255, 255, 0.1)",
          zIndex: 0,
        },
      }}
    >
      {/* Wave SVG for top border */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "20px",
          overflow: "hidden",
        }}
      >
        <svg
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          fill="#f7f9fb"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            display: "block",
            width: "100%",
            height: "100%",
            transform: "rotate(180deg)",
          }}
        >
          <path d="M0,0 C240,95 480,95 720,45 C960,-5 1200,-5 1440,45 L1440,100 L0,100 Z"></path>
        </svg>
      </Box>

      <Container
        maxWidth="lg"
        sx={{ position: "relative", zIndex: 1, pt: 6, pb: 4 }}
      >
        <Grid container spacing={4} justifyContent="space-between">
          {/* Logo and Description */}
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                mb: 2,
                background: "rgba(255, 255, 255, 0.1)",
                p: 1,
                borderRadius: 2,
                width: "fit-content",
              }}
            >
              <PublicIcon sx={{ mr: 1, fontSize: 36 }} />
              <Typography variant="h5" fontWeight="bold">
                Country Explorer
              </Typography>
            </Box>
            <Typography
              variant="body1"
              sx={{ mb: 2, textShadow: "0 1px 2px rgba(0,0,0,0.1)" }}
            >
              Discover countries around the world, their flags, populations,
              languages, and more. Built with React and Material UI for the
              SE3040 Application Frameworks course.
            </Typography>
            <Box
              sx={{
                mt: 2,
                display: "flex",
                gap: 1,
              }}
            >
              <IconButton
                aria-label="github"
                component="a"
                href="https://github.com"
                target="_blank"
                sx={{
                  bgcolor: "rgba(255, 255, 255, 0.2)",
                  color: "#fff",
                  transition: "transform 0.2s, background-color 0.2s",
                  "&:hover": {
                    bgcolor: "rgba(255, 255, 255, 0.3)",
                    transform: "translateY(-3px)",
                  },
                }}
              >
                <GitHubIcon />
              </IconButton>
              <IconButton
                aria-label="linkedin"
                component="a"
                href="https://linkedin.com"
                target="_blank"
                sx={{
                  bgcolor: "rgba(255, 255, 255, 0.2)",
                  color: "#fff",
                  transition: "transform 0.2s, background-color 0.2s",
                  "&:hover": {
                    bgcolor: "rgba(255, 255, 255, 0.3)",
                    transform: "translateY(-3px)",
                  },
                }}
              >
                <LinkedInIcon />
              </IconButton>
              <IconButton
                aria-label="twitter"
                component="a"
                href="https://twitter.com"
                target="_blank"
                sx={{
                  bgcolor: "rgba(255, 255, 255, 0.2)",
                  color: "#fff",
                  transition: "transform 0.2s, background-color 0.2s",
                  "&:hover": {
                    bgcolor: "rgba(255, 255, 255, 0.3)",
                    transform: "translateY(-3px)",
                  },
                }}
              >
                <TwitterIcon />
              </IconButton>
            </Box>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={6} md={2}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                mb: 2,
                gap: 1,
              }}
            >
              <ExploreIcon />
              <Typography variant="h6" fontWeight="bold">
                Explore
              </Typography>
            </Box>
            <Link
              href="#"
              color="inherit"
              sx={{
                display: "block",
                mb: 1.5,
                transition: "transform 0.2s",
                "&:hover": {
                  transform: "translateX(5px)",
                },
              }}
            >
              All Countries
            </Link>
            <Link
              href="#"
              color="inherit"
              sx={{
                display: "block",
                mb: 1.5,
                transition: "transform 0.2s",
                "&:hover": {
                  transform: "translateX(5px)",
                },
              }}
            >
              By Region
            </Link>
            <Link
              href="#"
              color="inherit"
              sx={{
                display: "block",
                mb: 1.5,
                transition: "transform 0.2s",
                "&:hover": {
                  transform: "translateX(5px)",
                },
              }}
            >
              By Language
            </Link>
            <Link
              href="#"
              color="inherit"
              sx={{
                display: "block",
                mb: 1.5,
                transition: "transform 0.2s",
                "&:hover": {
                  transform: "translateX(5px)",
                },
              }}
            >
              Search
            </Link>
          </Grid>

          {/* Resources */}
          <Grid item xs={6} md={2}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                mb: 2,
                gap: 1,
              }}
            >
              <LanguageIcon />
              <Typography variant="h6" fontWeight="bold">
                Resources
              </Typography>
            </Box>
            <Link
              href="https://restcountries.com/"
              target="_blank"
              color="inherit"
              sx={{
                display: "block",
                mb: 1.5,
                transition: "transform 0.2s",
                "&:hover": {
                  transform: "translateX(5px)",
                },
              }}
            >
              REST Countries API
            </Link>
            <Link
              href="https://mui.com/"
              target="_blank"
              color="inherit"
              sx={{
                display: "block",
                mb: 1.5,
                transition: "transform 0.2s",
                "&:hover": {
                  transform: "translateX(5px)",
                },
              }}
            >
              Material UI
            </Link>
            <Link
              href="https://reactjs.org/"
              target="_blank"
              color="inherit"
              sx={{
                display: "block",
                mb: 1.5,
                transition: "transform 0.2s",
                "&:hover": {
                  transform: "translateX(5px)",
                },
              }}
            >
              React
            </Link>
            <Link
              href="#"
              color="inherit"
              sx={{
                display: "block",
                mb: 1.5,
                transition: "transform 0.2s",
                "&:hover": {
                  transform: "translateX(5px)",
                },
              }}
            >
              Documentation
            </Link>
          </Grid>

          {/* Contact */}
          <Grid item xs={12} md={3}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                mb: 2,
                gap: 1,
              }}
            >
              <InfoIcon />
              <Typography variant="h6" fontWeight="bold">
                Contact
              </Typography>
            </Box>
            <Typography
              variant="body2"
              paragraph
              sx={{ textShadow: "0 1px 2px rgba(0,0,0,0.1)" }}
            >
              Have questions or feedback? Reach out to us.
            </Typography>
            <Link
              href="mailto:contact@example.com"
              color="inherit"
              sx={{
                display: "block",
                mb: 1.5,
                fontWeight: "bold",
                transition: "transform 0.2s",
                "&:hover": {
                  transform: "translateX(5px)",
                },
              }}
            >
              contact@example.com
            </Link>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, bgcolor: "rgba(255, 255, 255, 0.2)" }} />

        {/* Copyright */}
        <Box
          sx={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            justifyContent: "space-between",
            alignItems: isMobile ? "center" : "flex-start",
            textShadow: "0 1px 2px rgba(0,0,0,0.1)",
          }}
        >
          <Typography variant="body2" align={isMobile ? "center" : "left"}>
            © {currentYear} Country Explorer. All rights reserved.
          </Typography>

          <Typography
            variant="body2"
            align={isMobile ? "center" : "right"}
            sx={{ mt: isMobile ? 1 : 0 }}
          >
            Made with{" "}
            <FavoriteIcon
              sx={{
                fontSize: 12,
                verticalAlign: "middle",
                mx: 0.5,
                color: "#ff80ab",
                animation: "heartBeat 1.5s infinite ease-in-out",
                "@keyframes heartBeat": {
                  "0%, 100%": { transform: "scale(1)" },
                  "15%": { transform: "scale(1.2)" },
                },
              }}
            />
            for SE3040 - Application Frameworks
          </Typography>
        </Box>
      </Container>
    </Paper>
  );
};

export default Footer;

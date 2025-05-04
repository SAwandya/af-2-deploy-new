import React from "react";
import { Box, Container, Typography, Grid, Paper } from "@mui/material";

const StatisticsSection = () => (
  <Box
    sx={{
      py: 8,
      background:
        "linear-gradient(90deg, rgba(128,203,196,0.1) 0%, rgba(179,157,219,0.1) 100%)",
      mb: 8,
    }}
  >
    <Container maxWidth="lg">
      <Typography
        variant="h4"
        component="h2"
        align="center"
        sx={{ mb: 6, fontWeight: 600 }}
      >
        Explore the World in Numbers
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={6} md={3}>
          <Paper
            elevation={0}
            sx={{
              p: 3,
              textAlign: "center",
              backgroundColor: "rgba(255,255,255,0.8)",
              borderRadius: 4,
            }}
          >
            <Typography variant="h3" color="primary" fontWeight="bold">
              195
            </Typography>
            <Typography variant="subtitle1">Countries</Typography>
          </Paper>
        </Grid>
        <Grid item xs={6} md={3}>
          <Paper
            elevation={0}
            sx={{
              p: 3,
              textAlign: "center",
              backgroundColor: "rgba(255,255,255,0.8)",
              borderRadius: 4,
            }}
          >
            <Typography variant="h3" color="primary" fontWeight="bold">
              7.8B
            </Typography>
            <Typography variant="subtitle1">Population</Typography>
          </Paper>
        </Grid>
        <Grid item xs={6} md={3}>
          <Paper
            elevation={0}
            sx={{
              p: 3,
              textAlign: "center",
              backgroundColor: "rgba(255,255,255,0.8)",
              borderRadius: 4,
            }}
          >
            <Typography variant="h3" color="primary" fontWeight="bold">
              7
            </Typography>
            <Typography variant="subtitle1">Continents</Typography>
          </Paper>
        </Grid>
        <Grid item xs={6} md={3}>
          <Paper
            elevation={0}
            sx={{
              p: 3,
              textAlign: "center",
              backgroundColor: "rgba(255,255,255,0.8)",
              borderRadius: 4,
            }}
          >
            <Typography variant="h3" color="primary" fontWeight="bold">
              6,500+
            </Typography>
            <Typography variant="subtitle1">Languages</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  </Box>
);

export default StatisticsSection;

import { Container, Grid, Skeleton, Typography } from "@mui/material";

// Helper: Render a grid of square skeletons
const CountrySkeletonGrid = ({ count = 8 }) => {
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
            backgroundColor: "primary.main",
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
        {Array.from({ length: count }).map((_, idx) => (
          <Grid item key={idx}>
            <Skeleton
              variant="rectangular"
              animation="wave"
              sx={{
                borderRadius: 5,
                width: "100%",
                aspectRatio: "1 / 1.25",
                minHeight: 320,
                maxHeight: 420,
                boxShadow: "0 8px 32px 0 rgba(128,203,196,0.10)",
              }}
            />
            <Skeleton variant="text" width="60%" sx={{ mt: 2, mx: "auto" }} />
            <Skeleton variant="text" width="40%" sx={{ mx: "auto" }} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default CountrySkeletonGrid;
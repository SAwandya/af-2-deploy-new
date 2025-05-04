import { Box, Container, Paper, Typography } from "@mui/material";
import { SignIn } from "@clerk/clerk-react";
import PublicIcon from "@mui/icons-material/Public";

export default function SignInPage() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #80cbc4 0%, #b39ddb 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        py: { xs: 3, sm: 6, md: 8 },
      }}
    >
      <Container maxWidth="sm">
        <Paper
          elevation={6}
          sx={{
            p: { xs: 2, sm: 3, md: 5 },
            borderRadius: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            background: "rgba(255,255,255,0.95)",
            boxShadow: "0 8px 32px 0 rgba(128,203,196,0.15)",
            width: "100%",
            maxWidth: 420,
            mx: "auto",
          }}
        >
          <Box
            sx={{ display: "flex", alignItems: "center", mb: { xs: 1, sm: 2 } }}
          >
            <PublicIcon
              sx={{ fontSize: { xs: 32, sm: 40 }, color: "#80cbc4", mr: 1 }}
            />
            <Typography
              variant="h5"
              fontWeight={700}
              color="primary"
              sx={{
                letterSpacing: ".05em",
                textShadow: "0 2px 8px rgba(128,203,196,0.08)",
                fontSize: { xs: "1.25rem", sm: "1.5rem" },
              }}
            >
              Country Explorer
            </Typography>
          </Box>
          <Typography
            variant="subtitle1"
            sx={{
              mb: { xs: 2, sm: 3 },
              color: "text.secondary",
              fontWeight: 500,
              textAlign: "center",
              fontSize: { xs: "1rem", sm: "1.1rem" },
            }}
          >
            Sign in to continue your journey
          </Typography>
          <Box sx={{ width: "100%", maxWidth: 400 }}>
            <SignIn routing="path" path="/sign-in" />
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}

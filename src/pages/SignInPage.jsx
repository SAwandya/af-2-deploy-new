// SignInPage.jsx
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
        py: 8,
      }}
    >
      <Container maxWidth="sm">
        <Paper
          elevation={6}
          sx={{
            p: { xs: 3, md: 5 },
            borderRadius: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            background: "rgba(255,255,255,0.95)",
            boxShadow: "0 8px 32px 0 rgba(128,203,196,0.15)",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
            <PublicIcon sx={{ fontSize: 40, color: "#80cbc4", mr: 1 }} />
            <Typography
              variant="h5"
              fontWeight={700}
              color="primary"
              sx={{
                letterSpacing: ".05em",
                textShadow: "0 2px 8px rgba(128,203,196,0.08)",
              }}
            >
              Country Explorer
            </Typography>
          </Box>
          <Typography
            variant="subtitle1"
            sx={{
              mb: 3,
              color: "text.secondary",
              fontWeight: 500,
              textAlign: "center",
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

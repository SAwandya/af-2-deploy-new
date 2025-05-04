import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { teal, deepPurple, grey, pink } from "@mui/material/colors";

let theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: teal[600],
      contrastText: "#fff",
    },
    secondary: {
      main: deepPurple[400],
      contrastText: "#fff",
    },
    background: {
      default: "#f7f9fb",
      paper: "#fff",
    },
    info: {
      main: pink[400],
    },
    text: {
      primary: grey[900],
      secondary: grey[700],
    },
  },
  typography: {
    fontFamily: `'Poppins', 'Roboto', 'Arial', sans-serif`,
    h1: {
      fontWeight: 700,
      fontSize: "2.8rem",
      letterSpacing: "-1px",
    },
    h2: {
      fontWeight: 600,
      fontSize: "2rem",
    },
    body1: {
      fontSize: "1.1rem",
    },
    button: {
      textTransform: "none",
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 16,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 24,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 24,
        },
      },
    },
  },
});
theme = responsiveFontSizes(theme);

export default theme;

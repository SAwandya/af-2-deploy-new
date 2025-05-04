// TopNavBar.jsx
import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Box,
  Tooltip,
  Menu,
  MenuItem,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import PublicIcon from "@mui/icons-material/Public";
import SearchIcon from "@mui/icons-material/Search";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import LoginIcon from "@mui/icons-material/Login";
import { useNavigate } from "react-router-dom";
import { UserButton, SignedIn, SignedOut } from "@clerk/clerk-react";

export default function TopNavBar({
  onSearchClick,
  onFilterClick,
  onLoginClick,
}) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleOpenMenu = (event) => setAnchorEl(event.currentTarget);
  const handleCloseMenu = () => setAnchorEl(null);
  const navigate = useNavigate();

  // Menu items for mobile
  const menuItems = [
    {
      label: "Home",
      icon: <PublicIcon fontSize="small" />,
      onClick: () => navigate("/"),
    },
    {
      label: "Search",
      icon: <SearchIcon fontSize="small" />,
      onClick: onSearchClick,
    },
    {
      label: "Filter",
      icon: <FilterAltIcon fontSize="small" />,
      onClick: onFilterClick,
    },
    {
      label: "Login",
      icon: <LoginIcon fontSize="small" />,
      onClick: onLoginClick,
      signedOutOnly: true,
    },
  ];

  return (
    <AppBar
      position="sticky"
      elevation={4}
      color="primary"
      sx={{
        background: "linear-gradient(90deg, #80cbc4 0%, #b39ddb 100%)",
        borderRadius: 0,
      }}
    >
      <Toolbar>
        {/* App Logo/Title */}
        <PublicIcon sx={{ mr: 1, fontSize: 32, color: "#fff" }} />
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{
            flexGrow: 1,
            fontWeight: 700,
            letterSpacing: ".1rem",
            color: "#fff",
            textShadow: "0 2px 8px rgba(100,100,160,0.12)",
          }}
        >
          Country Explorer
        </Typography>

        {/* Desktop Buttons */}
        {!isMobile && (
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Tooltip title="Home">
              <Button
                color="inherit"
                startIcon={<PublicIcon />}
                onClick={() => navigate("/")}
                sx={{ fontWeight: 600 }}
              >
                Home
              </Button>
            </Tooltip>
            <Tooltip title="Search">
              <Button
                color="inherit"
                startIcon={<SearchIcon />}
                onClick={onSearchClick}
                sx={{ fontWeight: 600 }}
              >
                Search
              </Button>
            </Tooltip>
            <Tooltip title="Filter by Region">
              <Button
                color="inherit"
                startIcon={<FilterAltIcon />}
                onClick={onFilterClick}
                sx={{ fontWeight: 600 }}
              >
                Region
              </Button>
            </Tooltip>
            <SignedOut>
              <Tooltip title="Login">
                <Button
                  color="inherit"
                  startIcon={<LoginIcon />}
                  onClick={onLoginClick}
                  sx={{ fontWeight: 600 }}
                >
                  Login
                </Button>
              </Tooltip>
            </SignedOut>
            <SignedIn>
              <Box sx={{ ml: 2 }}>
                <UserButton
                  afterSignOutUrl="/sign-in"
                  appearance={{
                    elements: {
                      userButtonAvatarBox: {
                        boxShadow: "0 2px 8px rgba(128,203,196,0.25)",
                        border: "2px solid #b39ddb",
                        transition: "box-shadow 0.2s, border 0.2s",
                        "&:hover": {
                          boxShadow: "0 4px 16px rgba(128,203,196,0.35)",
                          border: "2px solid #80cbc4",
                        },
                      },
                    },
                    variables: {
                      colorPrimary: "#80cbc4",
                      colorText: "#222",
                      borderRadius: "12px",
                    },
                  }}
                />
              </Box>
            </SignedIn>
          </Box>
        )}

        {/* Mobile Menu */}
        {isMobile && (
          <>
            <IconButton color="inherit" onClick={handleOpenMenu} size="large">
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleCloseMenu}
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              transformOrigin={{ vertical: "top", horizontal: "right" }}
            >
              {menuItems
                .filter(
                  (item) =>
                    !item.signedOutOnly || // Show all except login when signed in
                    (item.signedOutOnly && <SignedOut>{true}</SignedOut>)
                )
                .map((item) => (
                  <MenuItem
                    key={item.label}
                    onClick={() => {
                      handleCloseMenu();
                      if (item.onClick) item.onClick();
                    }}
                  >
                    {item.icon}
                    <Typography sx={{ ml: 1 }}>{item.label}</Typography>
                  </MenuItem>
                ))}
              <SignedIn>
                <Box sx={{ display: "flex", justifyContent: "center", py: 2 }}>
                  <UserButton
                    afterSignOutUrl="/sign-in"
                    appearance={{
                      elements: {
                        userButtonAvatarBox: {
                          boxShadow: "0 2px 8px rgba(128,203,196,0.25)",
                          border: "2px solid #b39ddb",
                          transition: "box-shadow 0.2s, border 0.2s",
                          "&:hover": {
                            boxShadow: "0 4px 16px rgba(128,203,196,0.35)",
                            border: "2px solid #80cbc4",
                          },
                        },
                      },
                      variables: {
                        colorPrimary: "#80cbc4",
                        colorText: "#222",
                        borderRadius: "12px",
                      },
                    }}
                  />
                </Box>
              </SignedIn>
            </Menu>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}

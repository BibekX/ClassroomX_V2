import { useState } from "react";

import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  Button,
  Tooltip,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import appLogo from "../../../img/logo/logo.png";
import { NavLink } from "react-router-dom";

const theme = createTheme({
  palette: {
    primary: {
      main: "#59405C",
    },
    light: {
      main: "#e3f2fd",
    },
  },
});

const pages = ["Explore", "Class", "Question"];
const settings = ["Profile", "Account", "Settings", "Logout"];

export default function Navbar() {
  const [auth, setAuth] = useState(false);

  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static" color="primary">
        <Container maxWidth="xxl">
          <Toolbar disableGutters>
            <NavLink to="/">
              <Box
                component="img"
                sx={{ display: { xs: "none", md: "flex" }, mr: 1, width: 200 }}
                src={appLogo}
                alt="app_logo_md"
              />
            </NavLink>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                onClick={handleOpenNavMenu}
                color="light"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <NavLink
                      to={`/${page.toLowerCase()}`}
                      style={{ textDecoration: "none", color: "#263238" }}
                    >
                      <Typography textAlign="center">{page}</Typography>
                    </NavLink>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Typography
              variant="h5"
              noWrap
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              <NavLink to="/">
                <Box
                  component="img"
                  sx={{
                    display: { xs: "flex", md: "none" },
                    mr: 1,
                    width: 100,
                  }}
                  src={appLogo}
                  alt="app_logo_xs"
                />
              </NavLink>
            </Typography>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "center",
              }}
            >
              {pages.map((page) => (
                <NavLink
                  to={`/${page.toLowerCase()}`}
                  style={{ textDecoration: "none", color: "#263238" }}
                  key={page}
                >
                  <Button
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, mx: 4, color: "white", display: "block" }}
                  >
                    {page}
                  </Button>
                </NavLink>
              ))}
            </Box>

            {auth ? (
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/2.jpg"
                    />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            ) : (
              <>
                <NavLink to="/login" style={{ textDecoration: "none" }}>
                  <Button
                    variant="outlined"
                    color="light"
                    sx={{ marginRight: 1 }}
                  >
                    Login
                  </Button>
                </NavLink>
                <NavLink
                  to="/signup"
                  style={{ textDecoration: "none", color: "#263238" }}
                >
                  <Button variant="contained" color="light">
                    Signup
                  </Button>
                </NavLink>
              </>
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}

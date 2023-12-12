import { useState, useEffect } from "react";
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
import appLogo from "../img/logo/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutThunk } from "../redux/slice/authSlice";
import defaultAvatar from "../img/profile/default.png";
import axios from "axios";

const pages = ["Explore", "Question"];

export default function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = useSelector((store) => store.auth);
  console.log("auth", auth);

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
    <AppBar position="static" sx={{ background: "none" }}>
      <Container>
        <Toolbar disableGutters>
          <Link to="/">
            <Box
              component="img"
              sx={{ display: { xs: "none", md: "flex" }, mr: 1, width: 200 }}
              src={appLogo}
              alt="app_logo_md"
            />
          </Link>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton size="large" onClick={handleOpenNavMenu} color="light">
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
                  <Link
                    to={`/${page.toLowerCase()}`}
                    style={{ textDecoration: "none", color: "#fff" }}
                  >
                    <Typography textAlign="center">{page}</Typography>
                  </Link>
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
            <Link to="/">
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
            </Link>
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
            }}
          >
            {pages.map((page) => (
              <Link
                to={`/${page.toLowerCase()}`}
                style={{ textDecoration: "none" }}
                key={page}
              >
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    mx: 4,
                    color: "white",
                    display: "block",
                    fontSize: 18,
                  }}
                >
                  {page}
                </Button>
              </Link>
            ))}
          </Box>

          {auth.isAuthenticated ? (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar
                    alt="profile"
                    src={
                      auth.user.role === "institution"
                        ? `${import.meta.env.VITE_BACKEND}/institution/avatar/${
                            auth.user.id
                          }?${Date.now()}`
                        : `${import.meta.env.VITE_BACKEND}/avatar/${
                            auth.user.id
                          }?${Date.now()}`
                    }
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
                <MenuItem
                  onClick={() => {
                    auth.user.role === "institution"
                      ? navigate("/institution/profile")
                      : navigate("/profile");
                    handleCloseUserMenu();
                  }}
                >
                  <Typography textAlign="center">Profile</Typography>
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    dispatch(logoutThunk());
                    handleCloseUserMenu();
                    navigate("/");
                  }}
                >
                  <Typography textAlign="center">Logout</Typography>
                </MenuItem>
              </Menu>
            </Box>
          ) : (
            <>
              <Link to="/login" style={{ textDecoration: "none" }}>
                <Button
                  variant="outlined"
                  color="light"
                  sx={{
                    marginRight: 1,
                    border: "2px solid",
                    fontWeight: "bold",
                    borderRadius: 8,
                    ":hover": {
                      border: "2px solid",
                    },
                  }}
                >
                  Login
                </Button>
              </Link>
              <Link
                to="/signup"
                style={{
                  textDecoration: "none",
                  color: "#263238",
                }}
              >
                <Button
                  variant="contained"
                  color="light"
                  sx={{ fontWeight: "bold", borderRadius: 8 }}
                >
                  Sign Up
                </Button>
              </Link>
            </>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}

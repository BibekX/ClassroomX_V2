import React, { useState } from "react";
import {
  Avatar,
  Button,
  TextField,
  Grid,
  Box,
  Typography,
  InputLabel,
  MenuItem,
  Select,
  Container,
  FormControl,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Link } from "react-router-dom";

export default function LoginForm(props) {
  const [userType, setUserType] = useState("student");

  const handleChange = (event) => {
    setUserType(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          mt: 6,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant="h5">
          {props.name === "signup" ? "Sign Up" : "Login"}
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          {props.name === "signup" && (
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel>User Type</InputLabel>
                <Select
                  value={userType}
                  label="User Type"
                  onChange={handleChange}
                >
                  <MenuItem value="student">Student</MenuItem>
                  <MenuItem value="teacher">Teacher</MenuItem>
                  <MenuItem value="company">Company</MenuItem>
                </Select>
              </FormControl>
            </Box>
          )}

          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          {props.name === "signup" ? (
            <Link
              to={
                userType === "company" ? "/company/setprofile" : "/setprofile"
              }
              style={{ textDecoration: "none" }}
            >
              <Button
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, fontWeight: "bold" }}
              >
                Create Account
              </Button>
            </Link>
          ) : (
            <>
              <Button
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, fontWeight: "bold" }}
              >
                Login
              </Button>
            </>
          )}
          <Grid container>
            <Grid item>
              <Link
                to={`/${props.name === "signup" ? "login" : "signup"}`}
                variant="body2"
              >
                <Typography
                  variant="body2"
                  sx={{
                    color: "#90CAF9",
                    textDecoration: "underline",
                    textDecorationColor: "rgba(255, 255, 255, 0.16)",
                    ":hover": {
                      textDecoration: "underline",
                      textDecorationColor: "#90CAF9",
                    },
                  }}
                >
                  {props.name === "signup"
                    ? "Already have an account? Login"
                    : "Don't have an account? Sign Up"}
                </Typography>
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}

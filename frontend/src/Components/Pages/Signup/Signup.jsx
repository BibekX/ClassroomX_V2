import React, { useState } from "react";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Link,
  Grid,
  Box,
  Typography,
  Container,
  InputLabel,
  MenuItem,
  Select,
  FormControl,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

export default function SignUp() {
  const [userType, setUserType] = useState("Student");

  const handleChange = (event) => {
    setUserType(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel>User Type</InputLabel>
                <Select
                  value={userType}
                  label="User Type"
                  onChange={handleChange}
                >
                  <MenuItem value="Student">Student</MenuItem>
                  <MenuItem value="Teacher">Teacher</MenuItem>
                  <MenuItem value="Institution">Institution</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <TextField
              margin="normal"
              required
              fullWidth
              id="fname"
              label="First Name"
              name="fname"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="lname"
              label="Last Name"
              name="lname"
            />
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
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container>
              <Grid item>
                <Link href="/login" variant="body2">
                  {"Already have an account? Login"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

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
  Link,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signupThunk, loginThunk } from "../redux/slice/authSlice";

export default function LoginForm(props) {
  const [userType, setUserType] = useState("student");
  const [credential, setCredential] = useState({ email: "", password: "" });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleTypeChange = (event) => {
    setUserType(event.target.value);
  };

  const handleCredentialChange = (event) => {
    const { name, value } = event.target;
    setCredential((prevValue) => ({ ...prevValue, [name]: value }));
  };

  const handleSignup = () => {
    props.name === "signup"
      ? dispatch(signupThunk({ ...credential, userType })).then(() =>
          userType === "institution"
            ? navigate("/institution/setprofile")
            : navigate("/setprofile")
        )
      : dispatch(loginThunk(credential));
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
        <Box component="form" noValidate sx={{ mt: 1 }}>
          {props.name === "signup" && (
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel>User Type</InputLabel>
                <Select
                  value={userType}
                  label="User Type"
                  onChange={handleTypeChange}
                >
                  <MenuItem value="student">Student</MenuItem>
                  <MenuItem value="teacher">Teacher</MenuItem>
                  <MenuItem value="institution">Institution</MenuItem>
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
            onChange={handleCredentialChange}
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
            onChange={handleCredentialChange}
          />
          <Button
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, fontWeight: "bold" }}
            onClick={handleSignup}
          >
            {props.name === "signup" ? "Create Account" : "Login"}
          </Button>
          <Grid container>
            <Grid item>
              <Link
                href=""
                variant="body2"
                onClick={(event) => {
                  event.preventDefault();
                  navigate(`/${props.name === "signup" ? "login" : "signup"}`);
                }}
              >
                <Typography variant="body2">
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

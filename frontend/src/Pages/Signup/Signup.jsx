import React, { useState } from "react";
import {
  Avatar,
  Button,
  TextField,
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
import { Link } from "react-router-dom";
import LoginComp from "../../Components/Login/LoginComp";

export default function SignUp() {
  // const [userType, setUserType] = useState("Student");

  // const handleChange = (event) => {
  //   setUserType(event.target.value);
  // };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  // };

  // return (
  //   <Container component="main" maxWidth="xs">
  //     <Box
  //       sx={{
  //         marginTop: 8,
  //         display: "flex",
  //         flexDirection: "column",
  //         alignItems: "center",
  //       }}
  //     >
  //       <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
  //         <LockOutlinedIcon />
  //       </Avatar>
  //       <Typography variant="h5">Sign Up</Typography>
  //       <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
  //         <Box sx={{ minWidth: 120 }}>
  //           <FormControl fullWidth>
  //             <InputLabel>User Type</InputLabel>
  //             <Select
  //               value={userType}
  //               label="User Type"
  //               onChange={handleChange}
  //             >
  //               <MenuItem value="Student">Student</MenuItem>
  //               <MenuItem value="Teacher">Teacher</MenuItem>
  //             </Select>
  //           </FormControl>
  //         </Box>

  //         <TextField
  //           margin="normal"
  //           required
  //           fullWidth
  //           id="email"
  //           label="Email Address"
  //           name="email"
  //           autoComplete="email"
  //         />
  //         <TextField
  //           margin="normal"
  //           required
  //           fullWidth
  //           name="password"
  //           label="Password"
  //           type="password"
  //           id="password"
  //           autoComplete="current-password"
  //         />
  //         <Link to="/setprofile" style={{ textDecoration: "none" }}>
  //           <Button
  //             // type="submit"
  //             fullWidth
  //             variant="contained"
  //             sx={{ mt: 3, mb: 2, fontWeight: "bold" }}
  //           >
  //             Create Account
  //           </Button>
  //         </Link>
  //         <Link to="/company/signup" style={{ textDecoration: "none" }}>
  //           <Button
  //             fullWidth
  //             variant="outlined"
  //             sx={{ mt: 1, mb: 2, border: "2px solid", fontWeight: "bold" }}
  //           >
  //             Company Sign Up
  //           </Button>
  //         </Link>
  //         <Grid container>
  //           <Grid item>
  //             <Link to="/login" variant="body2">
  //               <Typography
  //                 variant="body2"
  //                 sx={{
  //                   color: "#90CAF9",
  //                   textDecoration: "underline",
  //                   textDecorationColor: "rgba(255, 255, 255, 0.16)",
  //                   ":hover": {
  //                     textDecoration: "underline",
  //                     textDecorationColor: "#90CAF9",
  //                   },
  //                 }}
  //               >
  //                 {"Already have an account? Login"}
  //               </Typography>
  //             </Link>
  //           </Grid>
  //         </Grid>
  //       </Box>
  //     </Box>
  //   </Container>
  // );
  return <LoginComp name="signup" />;
}

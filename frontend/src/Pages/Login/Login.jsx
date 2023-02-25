import React from "react";
import {
  Avatar,
  Button,
  TextField,
  Grid,
  Box,
  Typography,
  Container,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Link } from "react-router-dom";
import LoginComp from "../../Components/Login/LoginComp";

export default function Login() {
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
  //       <Typography variant="h5">Login</Typography>
  //       <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
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
  //         <Button
  //           type="submit"
  //           fullWidth
  //           variant="contained"
  //           sx={{ mt: 3, mb: 2, fontWeight: "bold" }}
  //         >
  //           Login
  //         </Button>
  //         <Grid container>
  //           <Grid item>
  //             <Link to="/signup">
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
  //                 {"Don't have an account? Sign Up"}
  //               </Typography>
  //             </Link>
  //           </Grid>
  //         </Grid>
  //       </Box>
  //     </Box>
  //   </Container>
  // );
  return <LoginComp name="login" />;
}

import { Box, Typography, Grid, Link } from "@mui/material";
import React from "react";

export default function Hero(props) {
  return (
    <Box>
      <Typography
        variant="h3"
        sx={{
          textAlign: "center",
          mb: 4,
          fontWeight: 600,
        }}
      >
        {props.name}
      </Typography>
      <Grid container>
        <Grid item lg={5} md={6} mb={4} sm={12} sx={{ textAlign: "center" }}>
          <Box
            component="img"
            src={props.picture}
            sx={{
              maxWidth: "85%",
              maxHeight: "300px",
              border: "2px solid #00adb5",
            }}
          />
        </Grid>
        <Grid item lg={7} md={6} sm={12} px={1}>
          <Typography variant="body1" sx={{ textAlign: "justify", mb: 2 }}>
            {props.bio}
          </Typography>
          <Link href={props.url} target="_blank">
            {props.url}
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
}

import { Box, Typography, Grid, Link } from "@mui/material";
import React from "react";

export default function Hero(props) {
  return (
    <Box>
      <Typography
        variant="h2"
        sx={{
          fontSize: { md: "50px", xs: "40px" },
          textAlign: "center",
          mb: 4,
          fontWeight: 600,
        }}
      >
        {props.name}
      </Typography>
      <Box sx={{ textAlign: "center", mb: 4 }}>
        <Box
          component="img"
          src={props.picture}
          sx={{
            maxWidth: "85%",
            maxHeight: "300px",
            border: "2px solid #00adb5",
          }}
        />
      </Box>
      <Typography variant="body1" sx={{ textAlign: "justify", mb: 2 }}>
        {props.bio}
      </Typography>
      <Link href={props.url} target="_blank">
        {props.url}
      </Link>
    </Box>
  );
}

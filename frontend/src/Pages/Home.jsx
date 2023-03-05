import React from "react";
import { Container, Box, Typography, Button } from "@mui/material";
import HeroImg from "../img/background/hero.png";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <Box
      sx={{
        mt: 6,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontSize: { md: "60px", xs: "50px" },
          textAlign: "center",
          fontWeight: 600,
        }}
      >
        Online Education
        <br />
        is now easy
      </Typography>
      <Link to="/explore" style={{ textDecoration: "none", color: "#263238" }}>
        <Button
          variant="contained"
          color="light"
          sx={{
            mt: 4,
            py: 1,
            px: 2,
            border: "2px solid",
            fontWeight: "bold",
            borderRadius: 8,
          }}
        >
          Start Now
        </Button>
      </Link>
      <Box component="img" src={HeroImg} sx={{ maxWidth: "90vw" }}></Box>
    </Box>
  );
}

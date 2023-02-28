import React, { useState } from "react";
import { Container, Box, Typography } from "@mui/material";
import CardComp from "../Components/CardForm";

export default function Explore() {
  const [companies, setCompanies] = useState([
    {
      id: 1,
      name: "Xccelerate",
      picture: "https://i.imgur.com/m01Ytyw.pnghttps://i.imgur.com/m01Ytyw.png",
      bio: "Xccelerate was founded with the original vision of bridging the tech talent gap in Hong Kong. We enable students and companies to acquire the skills they need in Artificial Intelligence, Blockchain, Software Engineering, User Experience Design and Digital Marketing. Our mission is to provide accessible, cutting-edge tech education to empower individuals, businesses, and communities globally.",
      url: "https://xccelerate.co/",
    },
    {
      id: 2,
      name: "BrainStation",
      bio: "Our cutting-edge curriculum is developed and taught by the world's best digital experts and professionals. Our classes offer a project-based learning environment, emphasizing collaboration and immediate feedback. Synapse, our custom-built, personalized learning platform provides an unrivaled learning experience.",
      picture: "https://i.imgur.com/ojlY1y2.png",
      url: "https://brainstation.io/",
    },

    {
      id: 3,
      name: "Flatiron School",
      bio: "Education should be the best investment you make in your future—and at Flatiron School, we're committed to helping you learn the skills you need to change yours for the better. Online and on our campuses across the country, we provide the skills, community, and immersive, outcomes-driven curriculum you need to launch a career in software engineering, data science, or cybersecurity.",
      picture: "https://i.imgur.com/GXXKQq5.png",
      url: "https://flatironschool.com/",
    },
  ]);
  return (
    <Container component="main" maxWidth="xl">
      <Box
        sx={{
          mt: 6,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h3" textAlign={"center"}>
          Let's Get Started, Toast
        </Typography>
        <Typography variant="h2" fontFamily="roboto" fontWeight={"bold"}>
          Institutions
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            alignItems: "stretch",
          }}
        >
          {companies.map((company) => (
            <CardComp
              key={company.id}
              name={company.name}
              bio={company.bio}
              img={company.picture}
            />
          ))}
        </Box>
      </Box>
    </Container>
  );
}

import { Box } from "@mui/material";
import React, { useState } from "react";
import Hero from "../Components/Hero";

export default function Course() {
  const [course, setCourse] = useState({
    id: 2,
    name: "Full-Stack Web Development",
    bio: "Our Immersive Web Development (Software Engineering) Coding Bootcamp is designed for students with a burning desire to learn the most relevant coding languages and frameworks in the software development industry. When taking this web development course, you don't need any experience and you're expected to learn how to develop websites. Upon completion of this web development course, you are able to gain a Web Development certificate.",
    picture: "https://i.imgur.com/Bg9BxGV.png",
    url: "https://xccelerate.co/course-detail/HK/FTSE",
    institutionsID: 1,
  });

  return (
    <Box>
      <Hero {...course} />
    </Box>
  );
}

import React, { useState } from "react";
import { Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CardForm from "../Components/CardForm";
import Hero from "../Components/Hero";

export default function Institution() {
  const [institute, setInstitute] = useState({
    id: 1,
    name: "Xccelerate",
    picture: "https://i.imgur.com/m01Ytyw.pnghttps://i.imgur.com/m01Ytyw.png",
    bio: "Our Immersive Web Development (Software Engineering) Coding Bootcamp is designed for students with a burning desire to learn the most relevant coding languages and frameworks in the software development industry. When taking this web development course, you don't need any experience and you're expected to learn how to develop websites. Upon completion of this web development course, you are able to gain a Web Development certificate.",
    url: "https://xccelerate.co/",
  });

  const [courses, setCourses] = useState([
    {
      id: 1,
      name: "Data Science & Machine Learning",
      bio: "This Full-Time Immersive Data Science and Machine Learning Bootcamp is designed for students with a burning desire to compound data-science knowledge in the A.I. industry. In this 16-week immersive bootcamp, you will learn the building blocks and tools that will empower you to tackle, build and deploy machine learning projects.",
      picture: "https://i.imgur.com/CecnpEY.jpg",
      url: "https://xccelerate.co/course-detail/HK/FTDS",
      institutionsID: 1,
    },
    {
      id: 2,
      name: "Full-Stack Web Development",
      bio: "Our Full-Time Immersive Software Engineering Coding Bootcamp is designed for students with a burning desire to learn the most relevant coding languages and frameworks in the software development industry.",
      picture: "https://i.imgur.com/Bg9BxGV.png",
      url: "https://xccelerate.co/course-detail/HK/FTSE",
      institutionsID: 1,
    },
    {
      id: 3,
      name: "Full Stack UX Design",
      bio: "In this 16-week, full time immersive full-stack UX design course, you will learn the basics of UX research and design methods through a combination of in-class practical learning and real life client projects. You will also learn to use Adobe XD and other cutting-edge collaborative tools, with which you will use to complete 2 additional live client projects.",
      picture: "https://i.imgur.com/9c8CQNz.png",
      url: "https://xccelerate.co/course-detail/HK/FTUX",
      institutionsID: 1,
    },
  ]);

  const navigate = useNavigate();

  return (
    <Box>
      <Hero {...institute} />

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
            fontWeight: "bold",
            my: 4,
          }}
        >
          Courses
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            alignItems: "stretch",
          }}
        >
          {courses.map((course) => (
            <CardForm
              key={course.id}
              name={course.name}
              bio={course.bio}
              img={course.picture}
              path="course"
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
}

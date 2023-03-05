import React, { useState } from "react";
import {
  Box,
  Typography,
  Paper,
  Unstable_Grid2,
  IconButton,
  Avatar,
} from "@mui/material";
import Moment from "react-moment";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import DefaultProfile from "../img/profile/default.png";

export default function IndividualQuestion() {
  const [question, setQuestion] = useState({
    id: 1,
    title: "How do I print in Javascript?",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, atque sequi aliquam nesciunt earum eos beatae autem pariatur enim, blanditiis quibusdam. Nemo veniam obcaecati cupiditate omnis, culpa natus vel rem.",
    votes: 10,
    tag: "javascript",
    userID: 1,
    username: "Kyle",
    date: "2023-03-03T12:59-0500",
  });

  const [answers, setAnswers] = useState([
    {
      id: 1,
      username: "Andrew",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo,atque sequi aliquanesciunt earum eos beatae autem pariaturenim, blanditiis quibusdam. Nemo veniam obcaecati cupiditate omnis, culpa natus vel rem.",
      vote: 6,
      date: "2023-03-03T22:59-0500",
    },
    {
      id: 2,
      username: "Gale",
      text: "Consectetur adipisicing elit. Quo,atque sequi aliquanesciunt earum eos beatae autem pariaturenim, blanditiis quibusdam. Nemo veniam obcaecati cupiditate omnis, culpa natus vel rem.",
      vote: 3,
      date: "2023-03-04T12:59-0500",
    },
  ]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography
        sx={{
          fontSize: { md: "60px", xs: "50px" },
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        Question
      </Typography>
      <Box sx={{ maxWidth: "100%" }}>
        <Paper
          square
          elevation={24}
          sx={{
            pr: 2,
            py: 2,
            mt: 4,
            width: "900px",
            maxWidth: "100%",
            height: "auto",
          }}
        >
          <Box sx={{ ml: 2.2, mb: 2 }}>
            <Typography
              sx={{
                fontWeight: 400,
                fontSize: { md: "35px", sm: "30px", xs: "25px" },
              }}
            >
              {question.title}
            </Typography>
            <Box sx={{ display: "flex" }}>
              <Avatar
                alt="profile"
                src={DefaultProfile}
                sx={{ width: 25, height: 25 }}
              />
              <Typography
                sx={{
                  display: "inline",
                  mx: 1,
                  color: "aqua",
                  fontWeight: "bold",
                }}
              >
                {question.username}
              </Typography>
              <Moment fromNow>{question.date}</Moment>
            </Box>
          </Box>

          <Unstable_Grid2 container>
            <Unstable_Grid2
              md={1}
              sm={1.3}
              xs={1.7}
              sx={{
                textAlign: "center",
                maxWidth: "100%",
              }}
            >
              <IconButton>
                <ArrowUpwardIcon fontSize="large" sx={{ color: "gray" }} />
              </IconButton>
              <Typography variant="h6" sx={{ color: "lightgray" }}>
                20
              </Typography>
              <IconButton>
                <ArrowDownwardIcon fontSize="large" sx={{ color: "gray" }} />
              </IconButton>
            </Unstable_Grid2>
            <Unstable_Grid2
              md={11}
              sm={10.7}
              xs={10.3}
              sx={{ pl: 2, display: "flex", alignItems: "center" }}
            >
              <Typography variant="body1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo,
                atque sequi aliquam nesciunt earum eos beatae autem pariatur
                enim, blanditiis quibusdam. Nemo veniam obcaecati cupiditate
                omnis, culpa natus vel rem. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Nostrum, cumque veritatis
                recusandae nesciunt omnis aliquid esse optio quo voluptatum,
                aliquam quisquam. Nulla tenetur minima possimus totam harum ea
                cum vel! Et necessitatibus provident blanditiis iste. Aspernatur
              </Typography>
            </Unstable_Grid2>
          </Unstable_Grid2>
        </Paper>

        {/* Answer */}
        <Typography variant="h6" sx={{ mt: 6 }}>
          {answers.length} Answers
        </Typography>
        {answers.map((answer) => (
          <Paper
            square
            elevation={24}
            sx={{
              pr: 2,
              py: 2,
              mt: 4,
              width: "900px",
              maxWidth: "100%",
              height: "auto",
            }}
          >
            <Box sx={{ display: "flex", ml: 2.2, mb: 1 }}>
              <Avatar
                alt="profile"
                src={DefaultProfile}
                sx={{ width: 25, height: 25 }}
              />
              <Typography
                sx={{
                  display: "inline",
                  mx: 1,
                  color: "aqua",
                  fontWeight: "bold",
                }}
              >
                {answer.username}
              </Typography>
              <Moment fromNow>{question.date}</Moment>
            </Box>
            <Unstable_Grid2 container>
              <Unstable_Grid2
                md={1}
                sm={1.3}
                xs={1.7}
                sx={{
                  textAlign: "center",
                  maxWidth: "100%",
                }}
              >
                <IconButton>
                  <ArrowUpwardIcon fontSize="large" sx={{ color: "gray" }} />
                </IconButton>
                <Typography variant="h6" sx={{ color: "lightgray" }}>
                  {answer.vote}
                </Typography>
                <IconButton>
                  <ArrowDownwardIcon fontSize="large" sx={{ color: "gray" }} />
                </IconButton>
              </Unstable_Grid2>
              <Unstable_Grid2
                md={11}
                sm={10.7}
                xs={10.3}
                sx={{ pl: 2, display: "flex", alignItems: "center" }}
              >
                <Typography variant="body1">{answer.text}</Typography>
              </Unstable_Grid2>
            </Unstable_Grid2>
          </Paper>
        ))}
      </Box>
    </Box>
  );
}

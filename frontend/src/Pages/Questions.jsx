import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Paper,
  Link,
  Grid,
  TextField,
  InputAdornment,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Moment from "react-moment";
import { useNavigate } from "react-router-dom";

export default function Questions() {
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([
    {
      id: 1,
      title: "How do I print in Javascript?",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, atque sequi aliquam nesciunt earum eos beatae autem pariatur enim, blanditiis quibusdam. Nemo veniam obcaecati cupiditate omnis, culpa natus vel rem.",
      votes: 10,
      answers: 5,
      tag: "javascript",
      userID: 1,
      username: "Kyle",
      date: "2023-03-03T12:59-0500",
    },
    {
      id: 2,
      title:
        "How to count observations of a specific value according to some conditions in pandas dataframe",
      text: "Lorem Ipsum",
      votes: 2,
      answers: 3,
      usersID: 1,
      tag: "python",
      username: "Xavi",
      date: "2023-02-19T12:59-0500",
    },
    {
      id: 3,
      title:
        "How do I update the latest version of Curl on windows 2022 server",
      text: "Lorem Ipsum",
      votes: 1,
      answers: 0,
      usersID: 1,
      tag: "windows",
      username: "Piccolo",
      date: "2022-04-19T12:59-0500",
    },
  ]);
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <Box
      sx={{
        mt: 6,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", maxWidth: "100%" }}>
        <TextField
          id="outlined-search"
          placeholder="Search for questions..."
          type="search"
          onChange={handleChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          sx={{ width: "800px", maxWidth: "100%", background: "#303030" }}
        />
        <Button
          variant="contained"
          sx={{ alignSelf: "flex-end", my: 2, fontWeight: "bold" }}
          onClick={() => navigate("ask")}
        >
          Ask Question
        </Button>
      </Box>
      <Typography
        variant="h2"
        sx={{ fontSize: { md: "60px", xs: "50px" }, fontWeight: "bold", my: 4 }}
      >
        Questions
      </Typography>
      {questions
        .filter((question) =>
          search === ""
            ? question
            : question.title.toLowerCase().includes(search.toLowerCase())
        )
        .map((question) => (
          <Paper
            square
            key={question.id}
            elevation={24}
            sx={{
              p: 2,
              mb: 0.2,
              width: "900px",
              maxWidth: "100%",
              height: "auto",
            }}
          >
            <Grid container>
              <Grid
                item
                md={10}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                <Link
                  variant="h6"
                  href=""
                  underline="none"
                  textAlign={"left"}
                  sx={{
                    ":hover": { color: "#2196f3" },
                    lineHeight: 1.3,
                  }}
                  onClick={(e) => {
                    e.preventDefault();
                    navigate(`${question.id}`);
                  }}
                >
                  {question.title}
                </Link>
                {question.tag && (
                  <Button
                    size="small"
                    variant="outlined"
                    sx={{
                      mr: 1,
                      mt: 1,
                      fontWeight: "bold",
                      color: "lightgray ",
                    }}
                  >
                    {question.tag}
                  </Button>
                )}
                <Typography
                  sx={{ display: { xs: "inline-block", md: "none" }, mt: 1 }}
                >
                  Votes: {question.votes} | Answers: {question.answers}
                </Typography>
                <Typography variant="body2" sx={{ mt: 0.5 }}>
                  <strong style={{ color: "aqua" }}>
                    {question.username}{" "}
                  </strong>
                  <Moment fromNow style={{ color: "#A9A9A9" }}>
                    {question.date}
                  </Moment>
                </Typography>
              </Grid>
              <Grid
                item
                md={2}
                sx={{
                  textAlign: "right",
                  display: { xs: "none", md: "flex" },
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <Typography>Votes: {question.votes}</Typography>
                <Typography>Answers: {question.answers}</Typography>
              </Grid>
            </Grid>
          </Paper>
        ))}
    </Box>
  );
}

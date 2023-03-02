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
import { styled } from "@mui/material/styles";

export default function Questions() {
  const [questions, setQuestions] = useState([
    {
      id: 1,
      title: "How do I print in Javascript?",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, atque sequi aliquam nesciunt earum eos beatae autem pariatur enim, blanditiis quibusdam. Nemo veniam obcaecati cupiditate omnis, culpa natus vel rem.",
      votes: 10,
      answers: 5,
      tag: "javascript",
      answered: false,
      userID: 1,
      username: "Kyle",
    },
    {
      id: 2,
      title:
        "How to count observations of a specific value according to some conditions in pandas dataframe",
      text: "Lorem Ipsum",
      votes: 2,
      answers: 3,
      answered: false,
      usersID: 1,
      tag: "python",
    },
    {
      id: 3,
      title:
        "How do I update the latest version of Curl on windows 2022 server",
      text: "Lorem Ipsum",
      votes: 1,
      answered: false,
      answers: 0,
      usersID: 1,
      tag: "windows",
    },
  ]);
  const [search, setSearch] = useState("");

  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: "center",
    color: theme.palette.text.secondary,
    height: 60,
    lineHeight: "60px",
  }));

  const handleChange = (e) => {
    console.log(e.target.value);
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
        >
          Ask Question
        </Button>
      </Box>
      <Typography variant="h2" sx={{ fontWeight: "bold", my: 4 }}>
        Questions
      </Typography>
      {questions
        .filter((question) =>
          search === ""
            ? question
            : question.title.toLowerCase().includes(search.toLowerCase())
        )
        .map((question) => (
          <Item
            square
            key={question.id}
            elevation={24}
            sx={{
              px: 2,
              py: 2,
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
                  sx={{ display: { sm: "inline", md: "none" }, mt: 1 }}
                >
                  Votes: {question.votes} | Answers: {question.answers}
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
          </Item>
        ))}
    </Box>
  );
}

import React from "react";
import { Box, Typography, Paper, TextField, Button } from "@mui/material";

export default function AskQuestion() {
  return (
    <Box
      sx={{
        mt: 6,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography variant="h2" sx={{ fontWeight: "bold", textAlign: "center" }}>
        Ask A Question
      </Typography>
      <Box sx={{ maxWidth: "100%" }}>
        <Paper
          square
          elevation={24}
          sx={{
            px: 2,
            py: 2,
            mt: 4,
            width: "900px",
            maxWidth: "100%",
            height: "auto",
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            Title
          </Typography>
          <Typography variant="body2" sx={{ color: "lightgray" }}>
            Be specific and imagine you're asking a question to another person.
          </Typography>
          <TextField
            placeholder="e.g. How to truncate a string in JavaScript?"
            variant="outlined"
            sx={{ width: "100%", mt: 1 }}
          />
        </Paper>

        <Paper
          square
          elevation={24}
          sx={{
            px: 2,
            py: 2,
            mt: 2,
            width: "900px",
            maxWidth: "100%",
            height: "auto",
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            What are the details of your problem?
          </Typography>
          <Typography variant="body2" sx={{ color: "lightgray" }}>
            Introduce the problem and expand on what you put in the title.
            Minimum 20 characters.
          </Typography>
          <TextField
            variant="outlined"
            placeholder="Explain your problem here"
            multiline
            rows="10"
            sx={{ width: "100%", mt: 1 }}
          ></TextField>
        </Paper>
        <Paper
          square
          elevation={24}
          sx={{
            px: 2,
            py: 2,
            mt: 2,
            width: "900px",
            maxWidth: "100%",
            height: "auto",
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            Tag
          </Typography>
          <Typography variant="body2" sx={{ color: "lightgray" }}>
            Add a tag to describe what your question is about
          </Typography>
          <TextField
            variant="outlined"
            placeholder="e.g. javascript"
            sx={{ width: "100%", mt: 1 }}
          ></TextField>
        </Paper>
        <Button
          variant="contained"
          sx={{
            width: { xs: "100%", md: "auto" },
            my: 2,
            fontWeight: "bold",
          }}
          onClick={() => navigate("ask")}
        >
          Post Question
        </Button>
      </Box>
    </Box>
  );
}

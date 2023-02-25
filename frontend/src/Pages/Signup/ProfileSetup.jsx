import React, { useState, useRef } from "react";
import {
  Container,
  Avatar,
  Box,
  TextField,
  Button,
  Link,
  IconButton,
} from "@mui/material";
import DefaultProfile from "../../img/profile/default.png";

export default function ProfileSetup() {
  const [avatar, setAvatar] = useState(DefaultProfile);
  const inputRef = useRef();

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <IconButton
          onClick={() => {
            inputRef.current.click();
          }}
        >
          <Avatar alt="profile" src={avatar} sx={{ width: 150, height: 150 }} />
        </IconButton>
        <Link
          href="#"
          underline="none"
          onClick={(e) => {
            e.preventDefault();
            inputRef.current.click();
          }}
        >
          Add Picture
        </Link>
        <input
          type="file"
          accept="image/*"
          hidden
          ref={inputRef}
          onChange={(e) => {
            setAvatar(URL.createObjectURL(e.target.files[0]));
          }}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="fname"
          label="First Name"
          name="fname"
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="lname"
          label="Last Name"
          name="lname"
        />
        <TextField
          margin="normal"
          fullWidth
          id="bio"
          label="Tell me something about yourself..."
          name="bio"
          multiline
          rows={7}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2, fontWeight: "bold" }}
        >
          Setup Profile
        </Button>
      </Box>
    </Container>
  );
}

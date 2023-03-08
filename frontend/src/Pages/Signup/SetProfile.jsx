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
import { useSelector, useDispatch } from "react-redux";
import { setUpProfileThunk } from "../../redux/slice/authSlice";
import { useNavigate } from "react-router-dom";

export default function SetProfile() {
  const navigate = useNavigate();
  const id = useSelector((store) => store.auth.user.id);
  const dispatch = useDispatch();
  const [avatar, setAvatar] = useState(DefaultProfile);
  const [profile, setProfile] = useState({
    id,
    fname: "",
    lname: "",
    bio: "",
  });
  const inputRef = useRef();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProfile((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <Container component="main" maxWidth="sm">
      <Box
        sx={{
          marginTop: 2,
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
          onClick={(event) => {
            event.preventDefault();
            inputRef.current.click();
          }}
        >
          Add Photo
        </Link>
        <input
          type="file"
          accept="image/*"
          hidden
          ref={inputRef}
          onChange={(event) => {
            setAvatar(URL.createObjectURL(event.target.files[0]));
            const data = new FormData();
            data.append("file", event.target.files[0]);
            let extension = event.target.files[0].name.split(".")[1];
            setProfile((prev) => ({
              ...prev,
              image: data,
              extension,
            }));
          }}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="fname"
          label="First Name"
          name="fname"
          onChange={handleChange}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="lname"
          label="Last Name"
          name="lname"
          onChange={handleChange}
        />
        <TextField
          margin="normal"
          fullWidth
          id="bio"
          label="Tell me something about yourself..."
          name="bio"
          multiline
          rows={7}
          onChange={handleChange}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2, fontWeight: "bold" }}
          onClick={() => {
            console.log("profile", profile);
            dispatch(setUpProfileThunk(profile)).then(() => navigate("/"));
          }}
        >
          Setup Profile
        </Button>
      </Box>
    </Container>
  );
}

import React, { useState, useRef } from "react";
import {
  Container,
  Box,
  TextField,
  Button,
  Link,
  IconButton,
  CardMedia,
} from "@mui/material";
import Banner from "../../img/profile/banner.jpg";
import { useSelector, useDispatch } from "react-redux";
import { updateInstitutionProfileThunk } from "../../redux/profilethunk";
import { useNavigate } from "react-router-dom";

export default function InstitutionProfile() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const inputRef = useRef();
  const auth = useSelector((store) => store.auth);
  const [banner, setBanner] = useState(
    `${import.meta.env.VITE_BACKEND}/institution/avatar/${auth.user.id}`
  );
  const [profile, setProfile] = useState({
    institution_id: auth.user.id,
    name: "",
    url: "",
    bio: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProfile((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (event) => {
    setBanner(URL.createObjectURL(event.target.files[0]));
    const data = new FormData();
    data.append("file", event.target.files[0]);
    let extension = event.target.files[0].name.split(".")[1];
    setProfile((prev) => ({
      ...prev,
      image: data,
      extension,
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
          <CardMedia
            component="img"
            sx={{ height: 200, maxWidth: 350 }}
            image={banner}
            alt="company banner"
          />
        </IconButton>
        <Link
          href="#"
          underline="none"
          onClick={(e) => {
            e.preventDefault();
            inputRef.current.click();
          }}
        >
          Add Company Banner
        </Link>
        <input
          type="file"
          accept="image/*"
          hidden
          ref={inputRef}
          onChange={handleImageChange}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="name"
          label="Company Name"
          name="name"
          value={profile.name}
          onChange={handleChange}
        />
        <TextField
          margin="normal"
          fullWidth
          id="url"
          label="Website URL"
          name="url"
          value={profile.url}
          onChange={handleChange}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="bio"
          label="Company Overview"
          name="bio"
          multiline
          rows={7}
          value={profile.bio}
          onChange={handleChange}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2, fontWeight: "bold" }}
          onClick={() => {
            dispatch(updateInstitutionProfileThunk(profile)).then(() =>
              navigate("/")
            );
          }}
        >
          Setup Profile
        </Button>
      </Box>
    </Container>
  );
}

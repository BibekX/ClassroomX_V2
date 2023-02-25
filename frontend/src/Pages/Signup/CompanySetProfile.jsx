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

export default function CompanySetProfile() {
  const [avatar, setAvatar] = useState(Banner);
  const inputRef = useRef();

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
            image={avatar}
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
          onChange={(e) => {
            setAvatar(URL.createObjectURL(e.target.files[0]));
          }}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="name"
          label="Company Name"
          name="name"
        />
        <TextField
          margin="normal"
          fullWidth
          id="url"
          label="Website URL"
          name="url"
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

import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function CardForm(props) {
  const navigate = useNavigate();
  return (
    <Card
      sx={{
        maxWidth: 320,
        width: "100%",
        mx: { md: 4, sm: 2 },
        my: 3,
        transition: "0.2s",
        background: "#303030",
        border: "2px solid #00adb5",
        "&:hover": {
          transform: "scale(1.05)",
          cursor: "pointer",
        },
      }}
      onClick={() => navigate(props.path)}
    >
      <CardMedia
        component="img"
        height="220"
        image={props.img}
        alt={props.name}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h4"
          sx={{ fontWeight: 600, textAlign: "center", fontSize: "30px" }}
          component="div"
        >
          {props.name}
        </Typography>
        <Typography variant="body2" color="text.secondary" textAlign={"center"}>
          {`${props.bio}`.slice(0, 250)}...
        </Typography>
      </CardContent>
    </Card>
  );
}

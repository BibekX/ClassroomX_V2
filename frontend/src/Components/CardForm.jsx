import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
} from "@mui/material";

export default function CardComp(props) {
  return (
    <Card sx={{ maxWidth: 340, width: "100%", mx: 4, my: 3 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="220"
          image={props.img}
          alt={props.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {`${props.bio}`.slice(0, 250)}...
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

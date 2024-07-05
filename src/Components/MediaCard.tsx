import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

interface MediaCardProps {
  name: string;
  currentPrice: number;
  image: string;
  onClick: () => void; // onClick handler prop
}

const MediaCard: React.FC<MediaCardProps> = ({
  name,
  currentPrice,
  image,
  onClick,
}) => {
  return (
    <Card sx={{ maxWidth: 345 }} onClick={onClick}>
      <CardMedia sx={{ height: 140 }} image={image} title={name} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Current Price: ${currentPrice}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default MediaCard;

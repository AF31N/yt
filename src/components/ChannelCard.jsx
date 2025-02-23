import React from "react";
import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import { demoThumbnailUrl, demoChannelUrl, demoChannelTitle } from "../utils/Constants";

const ChannelCard = ({ channelDetail }) => {
  const channelId = channelDetail?.channel_name; 
  const thumbnail = channelDetail?.thumbnail; 
  const channelTitle = channelDetail?.channel_title;

  return (
    <Card
      sx={{
        width: { xs: "100%", sm: "358px", md: "320px" },
        boxShadow: "none",
        borderRadius: "10px",
        backgroundColor: "#1E1E1E",
        transition: "transform 0.3s, box-shadow 0.3s",
        "&:hover": {
          transform: "scale(1.05)",
          boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)",
        },
      }}
    >
      <Link to={channelId ? `/channel/${channelId}` : demoChannelUrl} style={{ textDecoration: "none" }}>
        <CardMedia
          image={thumbnail || demoThumbnailUrl}
          alt={channelTitle}
          sx={{
            width: { xs: "100%", sm: "358px" },
            height: 180,
            borderRadius: "10px 10px 0 0",
            objectFit: "cover",
          }}
        />
        <CardContent sx={{ textAlign: "center" }}>
          <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
            {channelTitle || demoChannelTitle}
            <CheckCircleIcon sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
          </Typography>
        </CardContent>
      </Link>
    </Card>
  );
};

export default ChannelCard;
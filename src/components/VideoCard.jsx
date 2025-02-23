import React from "react";
import { Card, CardMedia, CardContent, Typography, Box } from "@mui/material";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline"; 

const VideoCard = ({ video }) => {
  if (!video) {
    return null; 
  }

  return (
    <Card
      sx={{
        width: "100%",
        maxWidth: "320px",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        transition: "transform 0.3s, box-shadow 0.3s",
        "&:hover": {
          transform: "scale(1.05)",
          boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)",
        },
      }}
    >
      
      <Box sx={{ position: "relative" }}>
        <CardMedia
          component="video"
          image={video.video_link}
          title={video.title}
          controls
          sx={{ height: "180px", width: "100%", borderRadius: "10px 10px 0 0" }}
        />
      
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "white",
            fontSize: "48px",
            opacity: 0.8,
            "&:hover": {
              opacity: 1,
            },
          }}
        >
          <PlayCircleOutlineIcon fontSize="inherit" />
        </Box>
      </Box>

    
      <CardContent>
        <Typography variant="h6" component="div" fontWeight="bold">
          {video.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          {video.description}
        </Typography>
        <Typography variant="caption" color="text.secondary" sx={{ mt: 1, display: "block" }}>
          Channel: {video.channel_name}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
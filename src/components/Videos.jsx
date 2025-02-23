import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import VideoCard from "./VideoCard"; 

const Videos = ({ videos, direction = "row" }) => {
  if (!videos?.length) {
    return (
      <Typography variant="body1" color="textSecondary" textAlign="center">
        No videos available.
      </Typography>
    );
  }

  return (
    <Stack
      direction={direction}
      flexWrap="wrap"
      justifyContent="start"
      gap={4}
      sx={{ padding: "16px" }}
    >
      {videos.map((video) => {
        if (!video || !video.title) {
          console.warn("Invalid video object:", video);
          return null;
        }

        return (
          <Box key={video.id} sx={{ width: { xs: "100%", sm: "48%", md: "31%", lg: "23%" } }}>
            <VideoCard video={video} />
          </Box>
        );
      })}
    </Stack>
  );
};

export default Videos;
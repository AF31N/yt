import React, { useState, useEffect } from "react";
import { Box, CircularProgress, Typography } from "@mui/material";
import { fetchVideos } from "../utils/fetchFromAPI"; 
import Videos from "./Videos"; 

const ChannelDetail = () => {
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchVideos(); 
        setVideos(response.items); 
        setIsLoading(false);
      } catch (err) {
        console.error("Error fetching videos:", err);
        setError("Failed to load videos"); 
        setIsLoading(false);
      }
    };

    fetchData();
  }, []); 

  if (isLoading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="80vh">
        <CircularProgress color="error" /> 
      </Box>
    );
  }

  if (error) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="80vh">
        <Typography variant="h6" color="error">
          {error}
        </Typography>
      </Box>
    );
  }

  return (
    <Box p={2}>
      <Videos videos={videos} /> 
    </Box>
  );
};

export default ChannelDetail;
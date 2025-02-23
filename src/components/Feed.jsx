import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { fetchFromAPI } from "../utils/fetchFromAPI"; 
import { Videos, SideBar } from "./"; 

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    setVideos([]);

    
    fetchFromAPI(`feeds/get-videos`)
      .then((data) => {
        console.log("API Response:", data); 

      
        if (data && data.data && data.data.results && Array.isArray(data.data.results.data)) {
          setVideos(data.data.results.data); 
        } else {
          console.error("Invalid API response structure:", data);
          setVideos([]); 
        }
      })
      .catch((error) => {
        console.error("Error fetching videos:", error);
        setVideos([]); 
      });
  }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
          position: "sticky", 
          top: 0, 
        }}
      >
        <SideBar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        <Typography className="copyright" variant="body2" sx={{ mt: 1.5, color: "#fff" }}>
        </Typography>
      </Box>

      {/* Main Video Section */}
      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
          {selectedCategory} <span style={{ color: "#FC1503" }}>videos</span>
        </Typography>
        <Videos videos={videos} /> 
      </Box>
    </Stack>
  );
};

export default Feed;
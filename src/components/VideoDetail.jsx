import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Typography, Box, Stack } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import { Videos, Loader } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
      
        const videoData = await fetchFromAPI(`feeds/get-video-detail?feed_id=${id}`);
        setVideoDetail(videoData[0]);

    
        const relatedVideos = await fetchFromAPI(`feeds/get-videos`);
        setVideos(relatedVideos.results);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Failed to load video details.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (isLoading) return <Loader />;
  if (error) return <Typography color="error">{error}</Typography>;
  if (!videoDetail) return <Typography>No video found.</Typography>;

  const { title, channel_name, channel_title, video_link } = videoDetail;

  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
       
        <Box flex={1}>
          <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
            <ReactPlayer
              url={video_link}
              className="react-player"
              controls
              width="100%"
              height="500px"
              style={{ borderRadius: "10px" }}
            />
            <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
              {title}
            </Typography>
            <Stack direction="row" justifyContent="space-between" sx={{ color: "#fff" }} py={1} px={2}>
              <Link to={`/channel/${channel_name}`} style={{ textDecoration: "none", color: "inherit" }}>
                <Typography variant={{ sm: "subtitle1", md: "h6" }} color="#fff">
                  {channel_title}
                  <CheckCircleIcon sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
                </Typography>
              </Link>
            </Stack>
          </Box>
        </Box>

        
        <Box px={2} py={{ md: 1, xs: 5 }} justifyContent="center" alignItems="center">
          <Typography variant="h6" fontWeight="bold" mb={2} color="#fff">
            Related Videos
          </Typography>
          <Videos videos={videos} direction="column" />
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;
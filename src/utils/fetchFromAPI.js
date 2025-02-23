import axios from "axios";

const BASE_URL = "https://react-test.aventusinformatics.com/api";


const login = async () => {
  try {
    const response = await axios.post(
      `${BASE_URL}/auth/token/`,
      {
        username: "Afrin", 
        password: "Afrin-AI-TEST-1106", 
      },
      {
        headers: {
          Authorization: `Basic ${btoa("Afrin:Afrin-AI-TEST-1106")}`,
        },
      }
    );
    console.log("Login Response:", response.data); 
    return response.data; 
  } catch (error) {
    console.error("Login failed:", error);
    throw error;
  }
};


const refreshToken = async (refreshToken) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/auth/token/refresh/`,
      {
        refresh: refreshToken,
      }
    );
    return response.data.access; 
  } catch (error) {
    console.error("Token refresh failed:", error);
    throw error;
  }
};


const fetchFromAPI = async (url, params = {}) => {
  let accessToken = localStorage.getItem("accessToken");

 
  if (!accessToken) {
    try {
      const { access, refresh } = await login();
      localStorage.setItem("accessToken", access);
      localStorage.setItem("refreshToken", refresh);
      accessToken = access;
    } catch (error) {
      console.error("Failed to log in and get access token:", error);
      throw error;
    }
  }

  try {
    console.log(`Fetching data from: ${BASE_URL}/${url}`); 
    const response = await axios.get(`${BASE_URL}/${url}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params,
    });
    console.log("Full API Response:", response); 
    console.log("API Response Data:", response.data); 
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 401) {
     
      const refreshToken = localStorage.getItem("refreshToken");
      if (refreshToken) {
        try {
          accessToken = await refreshToken(refreshToken);
          localStorage.setItem("accessToken", accessToken);

          
          const retryResponse = await axios.get(`${BASE_URL}/${url}`, {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
            params, 
          });
          console.log("Retry API Response:", retryResponse.data); 
          return retryResponse.data;
        } catch (refreshError) {
          console.error("Failed to refresh token:", refreshError);
          throw refreshError;
        }
      } else {
      
        console.error("Refresh token not available.");
       
      }
    }
    console.error("Error fetching data:", error);
    throw error;
  }
};


const fetchVideos = async (searchTerm = "", page = 1, limit = 10) => {
  const params = {
    search: searchTerm,
    page,
    limit,
  };
  return fetchFromAPI("feeds/get-videos", params);
};


const fetchVideoDetails = async (feedId) => {
  const params = {
    feed_id: feedId,
  };
  return fetchFromAPI("feeds/get-video-details", params);
};


export { fetchFromAPI, login, refreshToken, fetchVideos, fetchVideoDetails };

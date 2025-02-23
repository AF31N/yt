

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';
const axios = require('axios');
const options = {
  method: 'GET',
  params: {
    part: 'snippet',
    videoId: 'M7FIvfx5J10',
    maxResults: 50,
  },
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}

export const fetchFromAPI = async (url) => {
  try {
    const response = await axios.get(`${BASE_URL}/${url}`, options); // Fixed here, added `, options`
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; // Re-throw the error to propagate it further if needed
  }
};

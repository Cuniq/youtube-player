import axios from "axios";

export const searchVideo = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/search",
  params: {
    part: "snippet",
    safeSearch: "none",
    type: "video", 
    key: `${process.env.REACT_APP_API_KEY}`,
  },
});


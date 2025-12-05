import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  method: "GET",
  params: {
    maxResults: "50",
  },
  headers: {
    // "x-rapidapi-key": "e5576a2210msh6cb07c786d822a4p1f9699jsn68c273acd936",
    // "x-rapidapi-host": "youtube-v31.p.rapidapi.com",
  },
};

export const Api = {
  async fetching(url) {
    const response = await axios.get(`${BASE_URL}/${url}`, options);
    return response.data;
  },
};

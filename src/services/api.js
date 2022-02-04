import axios from "axios";

export const key = "be5cb56e6c9ef9dfd5b86ef41ec3ac111e7105bb";

const api = axios.create({
  baseURL: "https://api-ssl.bitly.com/v4",
  headers: {
    Authorization: `Bearer ${key}`,
  },
});

export default api;

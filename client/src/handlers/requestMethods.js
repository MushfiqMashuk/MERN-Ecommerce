import axios from "axios";

const baseURL = "http://localhost:5000/";

const TOKEN = "";

export const publicRequest = axios.create({
  baseURL,
});

export const privateRequest = axios.create({
  baseURL,
  header: { token: `Bearer ${TOKEN}` },
});

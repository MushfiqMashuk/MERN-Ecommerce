import axios from "axios";

const baseURL = "http://localhost:5000/";

const token = "";

export const publicRequest = axios.create({
  baseURL,
});

export const privateRequest = axios.create({
  baseURL,
  headers: { token: `Bearer ${token}` },
});

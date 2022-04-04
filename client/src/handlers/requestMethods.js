import axios from "axios";

const baseURL = process.env.REACT_APP_SERVER_URL;

const item = JSON.parse(localStorage.getItem("persist:root"));
const user = item && item.user;
const currentUser = user && JSON.parse(user).currentUser;
const TOKEN = currentUser && currentUser.accessToken;

export const publicRequest = axios.create({
  baseURL,
});

export const privateRequest = axios.create({
  baseURL,
  headers: { token: `Bearer ${TOKEN}` },
});

import axios from "axios";

const baseURL = process.env.REACT_APP_SERVER_URL;

const user = JSON.parse(localStorage.getItem("persist:root")).user;
const currentUser = user && JSON.parse(user).currentUser;
const TOKEN = currentUser && currentUser.accessToken;

console.log(TOKEN);

export const publicRequest = axios.create({
  baseURL,
});

export const privateRequest = axios.create({
  baseURL,
  headers: { token: `Bearer ${TOKEN}` },
});

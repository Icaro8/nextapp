import axios from "axios";

export const api = axios.create({
  baseURL: `http://e906-186-232-143-24.ngrok.io/`,
});

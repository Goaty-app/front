import axios from "axios";
import { getToken } from "@/service/auth.service";

const http = axios.create({
  // TODO: ADD .ENV API
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3000/api",
});

http.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (typeof window !== "undefined" && token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default http;

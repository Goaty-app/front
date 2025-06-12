import axios from "axios";
import { getToken } from "@/service/auth.service";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
const API_VERSION = process.env.NEXT_PUBLIC_API_VERSION;

// Client pour l'authentification (pas de version dans l'URL)
const httpAuth = axios.create({
  baseURL: `${API_BASE_URL}`,
});

// Client pour toutes les routes API versionnées
const httpApi = axios.create({
  baseURL: `${API_BASE_URL}${API_VERSION}`,
});

[httpAuth, httpApi].forEach((client) => {
  client.interceptors.request.use(
    (config) => {
      const token = getToken();
      if (typeof window !== "undefined" && token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => Promise.reject(error),
  );
});

export { httpAuth, httpApi };

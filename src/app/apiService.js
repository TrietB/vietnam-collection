import axios from "axios";

import { BASE_URL } from "./config";

console.log(BASE_URL);

const apiService = axios.create({
  baseURL: BASE_URL,
});

apiService.interceptors.request.use(
  (request) => {
    console.log("Start request", request);
    return request;
  },
  (error) => {
    console.log("Request error", { error });
    return Promise.reject(error);
  }
);

apiService.interceptors.response.use(
  (response) => {
    console.log("Response", response);
    return response.data;
  },
  (error) => {
    console.log("Response error", { error });
    let message = error.response?.data?.errors?.message || "Unknown Error";
    return Promise.reject(message);
  }
);

export default apiService;

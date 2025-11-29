import axios from "axios";

const apiInstance = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    Authorization: "Bearer my-auth-key",
  },
});

// INFO: we can intercept the calls here
// apiInstance.interceptors();

export default apiInstance;

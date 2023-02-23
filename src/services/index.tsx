import axios from "axios";

const axiosInt = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL || "https://api.devel.cryptonets.ai/",
  headers: {
    "x-api-key": process.env.REACT_APP_API_KEY || "00000000000000001962",
  },
});

axiosInt.interceptors.request.use(
  async (config) => {
    config.headers.authorization = "";
    return Promise.resolve(config);
  },
  (error) => Promise.reject(error)
);

axiosInt.interceptors.response.use(
  (response) => response.data,
  (error) => {
    return Promise.reject(error.response);
  }
);

export default axiosInt;

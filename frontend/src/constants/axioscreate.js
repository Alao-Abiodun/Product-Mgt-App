import axios from "axios";

const token = localStorage.getItem("token");

const axiosURL = axios.create({
  baseURL: "http://localhost:3332/api/v1",
  headers: {
    Authorization: token,
  },
});

export default axiosURL;

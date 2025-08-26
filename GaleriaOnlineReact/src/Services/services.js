
import axios from "axios";

const apiPort = "7220";

const localApi = `https://localhost:${apiPort}/api/`;

const api = axios.create({
    baseURL : localApi
});

export default api;
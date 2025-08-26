
import axios from "axios";

const apiPort = "7019";

const localApi = `https://localhost:${apiPort}/api/`;

const api = axios.create({
    baseURL : nuvemApi
});

export default api;
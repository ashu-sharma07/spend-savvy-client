import axios from "axios";
const BASE_URL = "https://api.cnarmy.in/api/v1";

const api = axios.create({
    baseURL: BASE_URL
});
export default api;

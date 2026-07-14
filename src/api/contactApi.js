import axios from "axios";

const API = axios.create({
    baseURL: "https://contactmanager-csm-b.onrender.com"
});

export default API;

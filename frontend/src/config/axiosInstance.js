import axios from "axios";

const baseURL = "https://ab7d-103-112-27-34.ngrok-free.app";


const axiosInst = axios.create({ baseURL, timeout: 10000 });

export default axiosInst;
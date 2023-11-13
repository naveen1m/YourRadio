import axios from "axios";

const baseURL = "https://e2bc-115-242-248-226.ngrok-free.app";


const axiosInst = axios.create({ baseURL, timeout: 10000 });

export default axiosInst;
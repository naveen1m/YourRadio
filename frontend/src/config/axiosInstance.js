import axios from "axios";

// const baseURL = "https://097b-2401-4900-3e91-2447-6789-1f20-d471-dad6.ngrok-free.app";
const baseURL = "http://192.168.163.67:3000"

const axiosInst = axios.create({ baseURL, timeout: 10000 });

export default axiosInst;
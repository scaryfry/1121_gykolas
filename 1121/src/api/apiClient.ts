import axios from "axios";

export const BACKENDURL = "http://localhost:8001/api"

const apiClient = axios.create({
    baseURL: BACKENDURL,
    headers: {"Content-Type": "application/json"}
}
)

export default apiClient;
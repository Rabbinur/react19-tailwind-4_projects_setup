import axios from "axios";

const ApiClient = axios.create({
  baseURL: "http://localhost:9000/planterbox/api/v1",
});

export default ApiClient;

import axios from "axios";

export default axios.create({
  // Make sure this points to the BACKEND domain, followed by /api
  baseURL: "https://app-taskapp-backend-reeha-fnd0b7b9dqcpazh8.eastasia-01.azurewebsites.net/api",
  headers: {
    "Content-type": "application/json"
  }
});

import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-clone-1dd14.cloudfunctions.net/api",
  // "http://localhost:5001/clone-1dd14/us-central1/api", // THE API IRL
});

export default instance;

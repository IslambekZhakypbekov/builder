import axios from "axios";

const instance = axios.create();
instance.defaults.baseURL = "https://builder-bdd81-default-rtdb.firebaseio.com/";

export default instance;
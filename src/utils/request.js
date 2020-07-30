import Axios from "axios";

const request = Axios.create({
    baseURL: process.env.VUE_APP_BASE_API,
    timeout: 500000
});

export default request;

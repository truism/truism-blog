import Axios from "axios";
import {Message} from "element-ui";

const request = Axios.create({
    baseURL: process.env.VUE_APP_BASE_API,
    timeout: 500000
});

request.interceptors.response.use(response => {
    if(!response.data.flag) {
        Message.warning(response.data.message);
    }
    return response
}, err => {
    const resp = err.response.data;
    if(!resp.flag) {
        Message.error(resp.message);
    }
    return Promise.reject(err);
});

export default request;

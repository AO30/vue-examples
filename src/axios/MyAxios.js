import axios from "axios";
import store from "@/store/index";
import { GET_EXCEPTION } from "@/store/types";
import { author } from "@/util/Const";
axios.defaults.baseURL = "/api/";
// axios.defaults.baseURL = "http://localhost:8080/api/";

//请求拦截器
axios.interceptors.request.use(
  req => {
    let auth = sessionStorage.getItem(author);
    if (auth != null) {
      req.headers[author] = auth;
    }
    return req;
  },
  error => {
    return Promise.reject(error);
  }
);

//响应拦截器
axios.interceptors.response.use(
  resp => resp,
  error => {
    let resp = error.response;
    if (resp) {
      switch (resp.status) {
        case 401:
          break;
      }
      store.commit(GET_EXCEPTION, { message: resp.data.message });
    }
    return Promise.reject();
  }
);
export default axios;

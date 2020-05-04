import Vue from "vue";
import Vuex from "vuex";
import * as types from "./types";
import axios from "@/axios/MyAxios";
import { upadateRoutes } from "@/router/index";
import { author } from "@/util/Const";
Vue.use(Vuex);

const myState = {
  exception: { message: null },
  isLogin: false,
  name: null,
  user: {
    name: "AO",
    address: "956"
  },
  homework: { name: null, deadline: null },
  teacher: null,
  courses: null
};

const myMutations = {
  [types.UPDATE_USER](state, data) {
    state.user = data;
  },
  [types.LIST_HOMEWORKS](state, data) {
    state.homeworks = data;
  },
  [types.GET_HOMEWORK](state, data) {
    state.homework = data;
  },
  [types.GET_EXCEPTION](state, data) {
    state.exception = data;
  },
  [types.LOGIN](state, data) {
    state.isLogin = data;
  },
  name(state, data) {
    state.name = data;
  },
  teacher(state, data) {
    state.teacher = data;
  },
  courses(state, data) {
    state.courses = data;
  }
};

const myActions = {
  [types.UPDATEUSER]({ commit }, data) {
    setTimeout(() => {
      commit(types.UPDATEUSER, data);
    }, 2000);
  },

  async [types.LIST_HOMEWORKS]({ commit }, data) {
    let resp = await axios.get("homeworks");
    commit(types.LIST_HOMEWORKS, resp.data.homeworks);
  },

  async [types.GET_HOMEWORK]({ commit }, data) {
    let resp = await axios.get(`homeworks/${data.hid}`);
    commit(types.GET_HOMEWORK, resp.data.homework);
  },
  //async [types.GET_HOMEWORK]({ commit }, data) {
  //  let resp = await axios.get(`homeworks/${data.hid}`);
  //  commit(types.GET_HOMEWORK, resp.data.homework);
  //},
  //登录
  async [types.LOGIN]({ commit }, data) {
    let resp = await axios.post("login", data);
    let auth = resp.headers[author];
    if (auth != null) {
      sessionStorage.setItem(author, auth);
      sessionStorage.setItem("role", resp.data.role);
      upadateRoutes();
      commit(types.LOGIN, true);
    }
  },
  async index({ commit }, data) {
    let resp = await axios.get("index");
    commit("name", resp.data.name);
  },
  // ------以下为向springboot发出请求
  // 需要取消mock，配置后端跨域
  async backendindex({ commit }, data) {
    let resp = await axios.get("teacher/index");

    commit("teacher", resp.data.teacher);
    commit("courses", resp.data.courses);
  }
};

export default new Vuex.Store({
  state: myState,
  mutations: myMutations,
  actions: myActions,
  modules: {}
});

// --------------------------
// 执行时判断，刷新时检测；也可以添加长度等更严格判断
if (sessionStorage.getItem(author) != null) {
  myState.isLogin = true;
}

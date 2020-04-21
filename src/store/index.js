import Vue from "vue";
import Vuex from "vuex";
import * as types from "./types";
import axios from "@/axios/MyAxios";

Vue.use(Vuex);

const myState = {
  user: {
    name: "AO",
    address: "956"
  },
  homeworks: [],
  homework: {}
};

const myMutations = {
  [types.UPDATEUSER](state, data) {
    state.user = data;
  },
  [types.LIST_HOMEWORKS](state, data) {
    state.homeworks = data;
  },
  [types.homework](state, data) {
    state.homework = data;
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
    commit(types.LIST_HOMEWORKS, data.homeworks);
  },

  async [types.GET_HOMEWORK]({ commit }, data) {
    let resp = await axios.get(`homeworks/${data.hid}`);
    commit(types.GET_HOMEWORK, data.homework);
  }
};

export default new Vuex.Store({
  state: myState,
  mutations: myMutations,
  actions: myActions,
  modules: {}
});

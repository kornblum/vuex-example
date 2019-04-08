/* eslint-disable */
import Vue from "vue";
import Vuex from "vuex";
import todos from "./modules/todos";
import checkout from "./modules/checkout";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    todos,
    checkout
  }
});

export default store;
/* eslint-disable */
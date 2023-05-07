import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

export default createStore({
    state: {
      isLogined: false
    },
    mutations: {
        setLogin(state, status) {
          state.isLogined = status;
        }
    },
    actions: {},
    getters: {
      getLoginStatus(state) {
        return state.isLogined;
      }
    },
    plugins: [createPersistedState({ storage: window.sessionStorage })],
  });
  
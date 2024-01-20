import { createStore } from 'vuex';

const store = createStore({
  modules: {
    user: {
      namespaced: true,
      state: {
        name: '',
        surname: '',
        role: '',
        token: '',
      },
      mutations: {
        setUserData(state, userData) {
          state.name = userData.name;
          state.surname = userData.surname;
          state.role = userData.role;
        },
        clearUserData(state) {
          state.name = '';
          state.surname = '';
          state.role = '';
        },
      },
      actions: {
        setUserData({ commit }, userData) {
          commit('setUserData', userData);
        },
        clearUserData({ commit }) {
          commit('clearUserData');
        },
      },
      getters: {
        userName: state => state.name,
        userSurname: state => state.surname,
        userRole: state => state.role,
        userToken: state => state.token,
      },
    },
  },
});

export default store;

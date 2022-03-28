import Vue from 'vue';
import Vuex from 'vuex';

import { auth } from '../plugins/auth';
// import save from '../store/save'
import state from './states'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'
// import createPersistedState from 'vuex-persistedstate';


Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
  },
  // save,
  state,
  actions,
  mutations,
  getters,
  plugins: [
    // createPersistedState(),
    // translator
  ]

})
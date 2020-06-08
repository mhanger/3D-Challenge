import Vue from 'vue'
import Vuex from 'vuex'
import * as swatches from './modules/swatches';
import * as scenes from './modules/scenes';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    swatches,
    scenes
  }
})

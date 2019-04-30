import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './action'

Vue.use(Vuex)
var store = new Vuex.Store({
    state,
    getters,
    actions,
    mutations
})
export default store;
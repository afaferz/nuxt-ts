import Vue from 'vue'
import Vuex from 'vuex'
import counterModuleMock from './counter'

Vue.use(Vuex)
const store = new Vuex.Store({
    state: () => ({
        count: 0,
        title: 'Mova',
    }),
    mutations: {},
    actions: {},
    getters: {},
    modules: { counter: counterModuleMock },
})

export default store

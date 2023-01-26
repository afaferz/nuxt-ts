import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
    state: () => require('../store/index').state,
    getters: require('../store/index').getters,
    mutations: require('../store/index').mutations,
    actions: require('../store/index').actions,
    modules: {
        counter: {
            namespaced: true,
            state: require('../store/counter/index').state,
            getters: require('../store/counter/index').getters,
            mutations: require('../store/counter/index').mutations,
            actions: require('../store/counter/index').actions,
        }
    }
})
export default store;

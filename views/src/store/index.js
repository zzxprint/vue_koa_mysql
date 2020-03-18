import Vue from 'vue'
import Vuex from 'vuex'
import commodity from './modules/commodity'
import shoppingCart from './modules/shoppingCart'
import user from './modules/user'
import getters from './getters'
Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        commodity,
        shoppingCart,
        user
    },
    getters
});

export default store

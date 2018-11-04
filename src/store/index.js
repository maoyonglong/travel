import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        curCity: '湛江'
    },
    actions: {
        selectCity(ctx, action){
            ctx.commit('selectCity', action.value);
        }
    },
    mutations: {
        selectCity(state, value){
            state.curCity = value;
        }
    }
});

export default store;
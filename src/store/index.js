import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
    pageNum: 1
};

const mutations = {
    add(state) {
        state.pageNum += 1;
    },
    init(state) {
        state.pageNum = 1;
    }
};

export default new Vuex.Store({
    state,
    mutations,
});

// store/alert.js
const state = () => ({
    message: '',
    type: '',
    show: false
});

const mutations = {
showAlert(state, payload) {
    state.message = payload.message;
    state.type = payload.type;
    state.show = true;
},
hideAlert(state) {
    state.show = false;
}
};

const actions = {
show({ commit }, payload) {
    commit('showAlert', payload);
    setTimeout(() => {
    commit('hideAlert');
    }, 5000); // Tempo em milissegundos para o alerta ficar visível
}
};

export default {
state,
mutations,
actions,
namespaced: true
};

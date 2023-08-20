export const state = () => ({
    allLoans: [],
    loan: {},
  })
  
  export const mutations = {
    defineData(state, newData) {
      state.allLoans =  newData
    },
    defineLoan(state, newData){
      state.loan =  newData
    },
  }
  
  export const actions = {
    async fetchLoans({ commit }) {
      const loans = await this.$axios.$get('/api/loan')
      commit('defineData', loans)
    },
    async fetchLoan({ commit }, id) {
      const loan = await this.$axios.$get(`/api/loan/${id}/`)
      commit('defineLoan', loan)
    },
    async updateLoan({ state }, id) {
      const loan = state.loan
      await this.$axios.$put(`/api/loan/${id}/`, loan)
    },
    async createLoan({}, loan) {
      await this.$axios.$post(`/api/loan/`, loan)
    },
    async deleteLoan({}, id) {
      await this.$axios.$delete(`/api/loan/${id}/`)
    }
  }
export const state = () => ({
    tracksCount: 0,
    employers: {},
    finders: {}
  })
  
  export const mutations = {
    setTracksCount(state, tracksCount) {
      state.tracksCount = tracksCount
    },
    setEmployers(state, employers) {
      state.employers = employers
    },
    setFinders(state, finders) {
      state.finders = finders
    }
  }
  
  export const actions = {
    async nuxtServerInit({dispatch, commit}) {
      console.log('nuxtServerInit');
    },
    async refresh({commit}) {
      const tracks = await this.$axios.$get('/api/skill/')
      commit('setTracksCount', tracks.count)
    }
  }
  
  export const getters = {
    tracksCount: s => s.tracksCount,
    employers: s => s.employers,
    finders: s => s.finders
  }
  
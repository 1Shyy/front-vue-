export const state = () => ({
    tracks: [],
    next: null,
    prev: null
  })
  
  export const mutations = {
    setTracks(state, tracks) {
      state.tracks = tracks
    },
    setNext(state, next) {
      state.next = next
    },
    setPrevious(state, prev) {
      state.prev = prev
    },
  }
  
  export const actions = {
    async fetch({commit}) {
      const tracks = await this.$axios.$get('/api/skill/')
      commit('setTracks', tracks.results);
      commit('setNext', tracks.next)
      commit('setPrevious', tracks.previous);
    },
    async filterByStatus({commit}) {
      const tracks = await this.$axios.$get('/api/skill')
      console.log(tracks);
      const filteredTracks = tracks.results.filter(task => task.title.includes('Drake'));

      console.log(tracks)
      commit('setTracks', filteredTracks)
    },
    async fetchAll({commit}) {
      const tracks = await this.$axios.$get('/api/skill/')
      commit('setTracks', tracks.results)
      commit('setNext', tracks.next);
      commit('setPrevious', tracks.previous);
    },
    sortByNames({commit}, tracks) {
      const sortedTasks = [...tracks].sort((a, b) => {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      });

      commit('setTracks', sortedTasks);
    },
    async fetchNext({commit}, nextLink) {
      const tracks = await this.$axios.$get('/api/' + nextLink.split('/api/')[1]); 
      commit('setTracks', tracks.results);
      commit('setNext', tracks.next);
      commit('setPrevious', tracks.previous);
    },
    async fetchPrev({commit}, prevLink) {
      const tracks = await this.$axios.$get('/api/' + prevLink.split('/api/')[1]); 
      commit('setTracks', tracks.results);
      commit('setNext', tracks.next);
      commit('setPrevious', tracks.previous);
    },
  }
  
  export const getters = {
    tracks: s => {
      console.log('got data')
      return s.tracks
    },
    next: s => s.next,
    prev: s => s.prev
  }
  
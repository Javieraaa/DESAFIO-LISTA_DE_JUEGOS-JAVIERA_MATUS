import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
state: {
    games: []
},
getters: {
    allGames: (state) => state.games,
},
mutations: {
    setGames(state, games) {
        state.games = games
    },
    decrementGamesStock(state, gameId) {
        const gameSelected = state.games.find(item => item.codigo === gameId)
        if(gameSelected && gameSelected.stock > 0) {
            gameSelected.stock--
        }
    },
    incrementGamesStock(state, gameId) {
        const gameSelected = state.games.find(item => item.codigo === gameId)
        if(gameSelected) {
            gameSelected.stock++
        }
    }
},
actions: {
    async fetchGames({ commit }) {
        try {
            const { data } = await axios.get('/api/juegos.json')
            commit('setGames', data)
        }catch(error) {
            console.error('No pudimos tomar la data', error)
        }
    },
    async incrementGamesStock({ commit }, gameId) {
        commit('incrementGamesStock', gameId)
    },
    async decrementGamesStock({ commit }, gameId) {
        commit('decrementGamesStock', gameId)
    }
}
})

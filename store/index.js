import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: function () {
      return {
        article: [
          {
            id: 1,
            title: 'Nuxt.jsでブログサイト作ってみた',
            date: '2021-12-25',
          },
          {
            id: 2,
            title: 'Nuxt.jsでブログサイト作ってみた',
            date: '2021-12-25',
          },
          {
            id: 3,
            title: 'Nuxt.jsでブログサイト作ってみた',
            date: '2021-12-25',
          },
          {
            id: 4,
            title: 'Nuxt.jsでブログサイト作ってみた',
            date: '2021-12-25',
          },
          {
            id: 5,
            title: 'Nuxt.jsでブログサイト作ってみた',
            date: '2021-12-25',
          },
          {
            id: 6,
            title: 'Nuxt.jsでブログサイト作ってみた',
            date: '2021-12-25',
          },
          {
            id: 7,
            title: 'Nuxt.jsでブログサイト作ってみた',
            date: '2021-12-25',
          },
          {
            id: 8,
            title: 'Nuxt.jsでブログサイト作ってみた',
            date: '2021-12-25',
          },
        ],
      }
    },
    mutations: {
      countUp(state) {
        state.count++
      },
    },
  })
}

export default createStore

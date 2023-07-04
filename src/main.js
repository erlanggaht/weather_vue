import { createApp } from 'vue'
import './style.css'
import { createStore } from 'vuex'
import App from './App.vue'


// Create a new store instance.
const store = createStore({
  state : {
      count: 0,
      data: [],
      region : ''
  },
  mutations: {
    increment (state) {
      state.count
    },
    add_data (state,data_api) {
        state.data = data_api
    },
    setRegion (state,region) {
      state.region = region
    }
  },
  getters: {
    getTodoById: (state) => (id) => {
      return state.datas.find(todo => todo.id === id)
    }
  },
  actions: {
    add_data (context) {
      context.commit('add_data')
    }
  }
})


createApp(App)
.use(store)
.mount('#app')


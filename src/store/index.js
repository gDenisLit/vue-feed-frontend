import { createStore } from 'vuex'
import { itemStore } from './modules/comment.store'

export const store = createStore({
  strict: true,
  modules: {
    userStore,
    itemStore,
  },
})

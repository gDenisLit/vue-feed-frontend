import { createStore } from 'vuex'
import { commentStore } from './modules/comment.store'

export const store = createStore({
  strict: true,
  modules: {
    commentStore
  }
})

import { createStore } from 'vuex'
<<<<<<< HEAD
import { itemStore } from './modules/item.store'
=======
import { itemStore } from './modules/comment.store'
>>>>>>> 2a463564705a017351fd1a06b050fa46f169fed2

export const store = createStore({
  strict: true,
  modules: {
<<<<<<< HEAD
    itemStore
=======
    userStore,
    itemStore,
>>>>>>> 2a463564705a017351fd1a06b050fa46f169fed2
  },
})

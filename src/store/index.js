import { createStore } from 'vuex'
import { userStore } from './modules/user.store'
import { itemStore } from './modules/item.store'

export const store = createStore({
  strict: true,
  modules: {
    userStore,
    itemStore
  },
})


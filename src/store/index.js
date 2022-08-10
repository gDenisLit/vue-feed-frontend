import { createStore } from 'vuex'
import { itemStore } from './modules/item.store'

export const store = createStore({
  strict: true,
  modules: {
    itemStore
  },
})


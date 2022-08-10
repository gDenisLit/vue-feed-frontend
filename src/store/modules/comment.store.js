import { itemService } from '../../services/item.service'
import { socketService } from '../../services/socket.service'

export const itemStore = {
  state: {
    items: [],
  },
  getters: {
    items({ items }) {
      return items
    },
  },
  mutations: {
    setItems(state, { items }) {
      state.items = items
    },
    updateItem(state, { savedItem }) {
      const idx = state.items.findIndex(i => i._id === savedItem._id)
      console.log('idx', idx)
      if (idx < 0) state.items.push(savedItem)
      else state.items[idx] = savedItem
    },
    removeItem(state, { itemId }) {
      state.items = state.items.filter(item => item._id !== itemId)
    },
  },
  actions: {
    async loadItems({ commit }) {
      try {
        const items = await itemService.query()
        commit({ type: 'setItems', items })
        // socketService.off(SOCKET_EVENT_ITEM_ADDED)
        // socketService.on(SOCKET_EVENT_ITEM_ADDED, item => {
        //     console.log('Got item from socket', item)
        //     commit({ type: 'additem', item })
        // })
        // socketService.off(SOCKET_EVENT_ITEM_ABOUT_YOU)
        // socketService.on(SOCKET_EVENT_ITEM_ABOUT_YOU, item => {
        //     console.log('item about me!', item)
        // })
      } catch (err) {
        console.log('itemStore: Error in loadItems', err)
        throw err
      }
    },
    async removeItem({ commit }, { itemId }) {
      try {
        await itemService.remove(itemId)
        commit({ type: 'removeItem', itemId })
      } catch (err) {
        console.log('itemStore: Error in removeItem', err)
        throw err
      }
    },
    async saveItem({ commit }, { item }) {
      try {
        const savedItem = await itemService.save(item)
        commit({ type: 'updateItem', savedItem })
      } catch (err) {
        console.log('itemStore: Error in saveItem')
        throw err
      }
    },
  },
}

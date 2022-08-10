import { itemService } from '../../services/item.service'
import { socketService } from '../../services/socket.service'

export const commentStore = {
  state: {
    comments: [],
  },
  getters: {
    comments({ comments }) {
      return comments
    },
  },
  mutations: {
    setComments(state, { comments }) {
      state.comments = comments
    },
    updateComment(state, { savedComment }) {
      const idx = state.comments.findIndex(i => i._id === savedComment._id)
      console.log('idx', idx)
      if (idx < 0) state.comments.push(savedComment)
      else state.comments[idx] = savedComment
    },
  },
  actions: {
    async loadComments({ commit }) {
      try {
        const comments = await commentService.query()
        commit({ type: 'setComments', comments })
      } catch (err) {
        console.log('commentStore: Error in loadComments', err)
        throw err
      }
    },
    async saveComment({ commit }, { comment }) {
      try {
        const savedComment = await commentService.save(comment)
        commit({ type: 'updateComment', savedComment })
      } catch (err) {
        console.log('commentStore: Error in saveComment')
        throw err
      }
    },
  },
}

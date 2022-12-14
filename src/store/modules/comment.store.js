import { commentService } from '../../services/comment.service'

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
    async loadComments({ commit }, { filterBy }) {
      try {
        if (!filterBy) filterBy = { txt: '' }
        console.log('filterBy', filterBy)
        const comments = await commentService.query(filterBy)
        console.log(comments)
        commit({ type: 'setComments', comments })
      } catch (err) {
        console.log('commentStore: Error in loadComments', err)
        throw err
      }
    },
    async saveComment({ commit }, { comment }) {
      try {
        const savedComment = await commentService.save(comment)
        console.log(savedComment)
        commit({ type: 'updateComment', savedComment })
      } catch (err) {
        console.log('commentStore: Error in saveComment')
        throw err
      }
    },
  },
}

import { httpService } from './http.service'
import { utilService } from './util.service'
import { storageService } from './async-storage.service'

export const commentService = {
  query,
  save,
  remove,
  getById,
}

//_createComments()

function query(filterBy) {
  // var queryStr = (!filterBy) ? '' : `?name=${filterBy.name}&sort=anaAref`
  return httpService.get('comment', filterBy)
  // return storageService.query('comment')
}

async function getById(commentId) {
  return httpService.get(`comment/${commentId}`)
  // return storageService.get('comment', commentId)
}

function save(comment) {
  // if (comment._id) return storageService.put('comment', comment)
  // else return storageService.post('comment', comment)

  if (comment._id) return httpService.put(`comment/${comment._id}`, comment)
  else return httpService.post('comment', comment)
}

function remove(commentId) {
  return httpService.delete(`comment/${commentId}`)
  // return storageService.remove('comment', commentId)
}

// function _createComments() {
//   let comments = JSON.parse(localStorage.getComment('comment'))
//   if (!comments) {
//     comments = utilService.getDemoComments()
//   }
//   localStorage.setComment('comment', JSON.stringify(comments))
// }

import { httpService } from './http.service'
import { utilService } from './util.service'
import { storageService } from './async-storage.service'
import { userService } from './user.service'
// import { socketService, SOCKET_EVENT_ITEM_ADDED } from './socket.service'

export const commentService = {
  query,
  save,
  remove,
  getById,
}

// _createComments()

function query(filterBy) {
  // var queryStr = (!filterBy) ? '' : `?name=${filterBy.name}&sort=anaAref`
  return httpService.get('comment')
  // return storageService.query('comment')
}

async function getById(commentId) {
  return httpService.get(`comment/${commentId}`)
  // return storageService.get('comment', commentId)
}

function save(comment) {
  // if (comment._id) return storageService.put('comment', comment)
  // else return storageService.post('comment', comment)

function remove(itemId) {
  // return httpService.delete(`item/${itemId}`)
  return storageService.remove('item', itemId)
}

function _createItems() {
  let items = JSON.parse(localStorage.getItem('item'))
  if (!items) { items = utilService.getDemoItems() }
  localStorage.setItem('item', JSON.stringify(items))
}



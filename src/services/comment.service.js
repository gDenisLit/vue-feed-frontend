import { httpService } from './http.service'

export const commentService = {
  query,
  save,
  remove,
  getById,
}

//_createfeeds()

function query(filterBy) {
  // var queryStr = (!filterBy) ? '' : `?name=${filterBy.name}&sort=anaAref`
  return httpService.get('feed', filterBy)
  // return storageService.query('feed')
}

async function getById(feedId) {
  return httpService.get(`feed/${feedId}`)
  // return storageService.get('feed', feedId)
}

function save(feed) {
  // if (feed._id) return storageService.put('feed', feed)
  // else return storageService.post('feed', feed)

  if (feed._id) return httpService.put(`feed/${feed._id}`, feed)
  else return httpService.post('feed', feed)
}

function remove(feedId) {
  return httpService.delete(`feed/${feedId}`)
  // return storageService.remove('feed', feedId)
}

// function _createfeeds() {
//   let feeds = JSON.parse(localStorage.getfeed('feed'))
//   if (!feeds) {
//     feeds = utilService.getDemofeeds()
//   }
//   localStorage.setfeed('feed', JSON.stringify(feeds))
// }

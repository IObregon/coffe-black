import API_KEY from './API_KEY'

const API_URL = 'https://api.themoviedb.org/3/tv'

export default {
  getPopularItems (page = 1) {
    return fetch(`${API_URL}/popular?api_key=${API_KEY}&page=${page}`)
  },
  getItem (id) {
    return fetch(`${API_URL}/${id}?api_key=${API_KEY}`)
  }
}

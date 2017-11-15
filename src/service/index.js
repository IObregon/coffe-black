import API_KEY from './API_KEY'

const API_URL = 'https://api.themoviedb.org/3/tv'

export default {
  getPopularItems () {
    return fetch(`${API_URL}/popular?api_key=${API_KEY}`)
  },
  getItem (id) {
    return fetch(`${API_URL}/${id}?api_key=${API_KEY}`)
  }
}

import API_KEY from '../../API_KEY'

export default {
  getItem (id) {
    return fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=${API_KEY}`)
  }
}

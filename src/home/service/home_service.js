import API_KEY from '../../API_KEY'

export default {
  getPopularItems () {
    return fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}`)
  }
}

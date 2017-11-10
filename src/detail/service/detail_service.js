export default {
  getItem (id) {
    return fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=f7698770439320b65427198b343fad6f`)
  }
}

export default {
  getPopularItems () {
    return fetch('https://api.themoviedb.org/3/tv/popular?api_key=f7698770439320b65427198b343fad6f')
  }
}

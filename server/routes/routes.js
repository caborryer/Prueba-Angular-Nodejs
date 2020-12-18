const router = require("express").Router();
const axios = require('axios')

router.get("/test", (req, res, next) => {

  const getTopMovies = async () => {
    try {
      return await axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=38e73fff75a56ceab612b735990996a2&language=en-US&page=1')
    } catch (error) {
      console.error(error)
    }
  }

  const countBreeds = async () => {
    const movies = await getTopMovies()

    if (movies.data) {
      res.json(movies.data.results)
      console.log(movies.data.results)
    }
  }

  countBreeds()



});

module.exports = router;


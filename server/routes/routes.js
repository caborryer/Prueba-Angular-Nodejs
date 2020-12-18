const router = require("express").Router();
const {getTopMovies, searchMovie} = require('../models/callingData')

router.get("/test", (req, res, next) => {

  const countBreeds = async () => {
    const movies = await getTopMovies()

    if (movies.data) {
      res.json(movies.data.results)
      console.log(movies.data.results)
    }
  }

  countBreeds()



});
router.get("/search:term", (req, res, next) => {

  const countBreeds = async () => {
    const {term} = req.params
    console.log(term)
    const movies = await searchMovie(term)
     res.json(movies)
      console.log(movies)
  }

  countBreeds()



});

module.exports = router;


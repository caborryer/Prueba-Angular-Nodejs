const router = require("express").Router();
const {getTopMovies, searchMovie, getTheatresMovies} = require('../models/callingData')

router.get("/topMovies", (req, res, next) => {

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
    if (movies.data) {
      res.json(movies.data.results)
      console.log(movies.data.results)
    }

  }

  countBreeds()



});

router.get("/now", (req, res, next) => {

  const countBreeds = async () => {
    const movies = await getTheatresMovies()

    if (movies.data) {
      res.json(movies.data.results)
      console.log(movies.data.results)
    }
  }

  countBreeds()



});

module.exports = router;


const {getTopMovies, searchMovie, getTheatresMovies} = require('../models/callingData')



class moviesController {
  constructor() {
  }

  async getresultTopMovies(req, res) {
    const movies = await getTopMovies()

    if (movies.data) {
      res.json(movies.data.results)
      console.log(movies.data.results)
    }

  };

}

/*onst countBreeds = async () => {
  const movies = await getTopMovies()

  if (movies.data) {
    res.json(movies.data.results)
    console.log(movies.data.results)
  }
}

countBreeds()c*/

module.exports = moviesController;

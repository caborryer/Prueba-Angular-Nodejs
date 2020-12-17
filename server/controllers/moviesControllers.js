const tmdb = require('../service/TMDB');
const baseController = require('../controllers/baseController');

class moviesController {
  constructor() {
  }

  async getMostPopular(req, res) {
    try {
      const getPopular = await tmdb.getMostPopular()
      baseController.handleSuccess(res, getPopular, null);
      
    } catch (error) {
      console.log(error)
      res.status(500).json({message: "Error: " + err.toString()});
    }

  };

}

module.exports = new moviesController();

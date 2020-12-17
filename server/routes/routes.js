const router = require("express").Router();
const axiosFetch = require("../config/axios")

router.get("/test", (req, res, next) => {

  async function getAll() {
    try {
      const results = await axiosFetch.get(`discover/movie?sort_by=popularity.desc&api_key=38e73fff75a56ceab612b735990996a2`)

      return results.data

    } catch (error) {
      console.log(error)
    }
  }

});

module.exports = router;


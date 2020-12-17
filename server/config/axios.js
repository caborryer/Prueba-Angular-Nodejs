const axios = require("axios");

const axiosFetch = axios.create({
  baseURL: "https://api.themoviedb.org/3/"
});
module.exports = axiosFetch

const axios = require('axios');

const BASE_PATH = 'https://api.themoviedb.org/3/movie/';
const API_KEY = '38e73fff75a56ceab612b735990996a2'

const getTopMovies = async () => {
    try {
        return await axios.get(`${BASE_PATH}top_rated?api_key=${API_KEY}&language=en-US&page=1`)
    } catch (error) {
        console.error(error)
    }
}

const searchMovie  = async (term) => {
    try {
        return await axios.get(`${BASE_PATH}search/movie?query=${ term }&sort_by=popularity.desc&api_key=${API_KEY}`)
    } catch (error) {
        console.error(error)
    }

}




module.exports = {getTopMovies, searchMovie}


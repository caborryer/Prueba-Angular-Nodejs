const axios = require('axios');

const BASE_PATH = 'https://api.themoviedb.org/3/';
const API_KEY = '38e73fff75a56ceab612b735990996a2'

const getTopMovies = async () => {
    try {
        return await axios.get(`${BASE_PATH}movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`)
    } catch (error) {
        console.error(error)
    }
}

const searchMovie  = async (term) => {
    try {
        return await axios.get(`${BASE_PATH}search/movie?api_key=${API_KEY}&language=en-US&query=${term}&page=1&include_adult=false`)
    } catch (error) {
        console.error(error)
    }

}
const getTheatresMovies  = async () => {
    try {
        return await axios.get(`${BASE_PATH}movie/now_playing?&api_key=${API_KEY}`)
    } catch (error) {
        console.error(error)
    }

}




module.exports = {getTopMovies, searchMovie, getTheatresMovies}


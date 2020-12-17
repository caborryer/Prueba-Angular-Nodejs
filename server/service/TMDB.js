const axios = require('axios');


class tmdb {
  constructor() {
    this.base = 'https://api.themoviedb.org/3/'
    this.apikey = '38e73fff75a56ceab612b735990996a2'
  }

  async makeRequest(url) {
    console.log(url)
    const result = await axios({
      url,

      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    });
    return result.data;
  }

  async getMostPopular() {
    const base = 'https://api.themoviedb.org/3/'
    const apikey = '38e73fff75a56ceab612b735990996a2'
    console.log(base)
    const url = `${base}discover/movie?sort_by=popularity.desc&api_key=${apikey}`;
    const mostPopular = await this.makeRequest(url);

    return mostPopular;
  }

}

module.exports = tmdb;

const axios = require('axios');


class tmdb {
  constructor() {
    this.base = 'https://api.themoviedb.org/3/'
    this.apikey = '38e73fff75a56ceab612b735990996a2'
  }

  async makeRequest(url, requestData) {
    const result = await axios({
      url,
      data: requestData,
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    });
    return result.data;
  }

  async getMostPopular() {
    console.log(this.base)
    const url = `${this.base}discover/movie?sort_by=popularity.desc&api_key=${this.apikey}`;
    const mostPopular = await this.makeRequest(url);

    return mostPopular;
  }

}

module.exports = new tmdb();

const axios = require("axios");

const BASE_URL = `https://api.themoviedb.org/3/`

module.exports = {
  connect: (apikey) => axios({
    method:"GET",
    headers: {
      "content-type":"application/x-www-form-urlencoded",

    },
    params: {
      apikey = '38e73fff75a56ceab612b735990996a2';
    }
  })
}

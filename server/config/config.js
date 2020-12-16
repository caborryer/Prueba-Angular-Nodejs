require("dotenv").config();

module.exports = {
  port: process.env.PORT || 3000,
  secretAuthKey: process.env.SECRET_KEY,
  apiKey: process.env.API_KEY,



};

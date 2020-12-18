const express = require("express");
const routes = require("./routes/routes");


const app = express();

app.set('port', 2000);

app.use('/', routes)
app.listen(app.get('port'), () => {
  console.log(`server on port`, app.get(`port`))
});



const app = require("express")();
const bodyParser = require("body-parser");
const cors = require("cors");
const routes = require("./routes/routes");

app.set('port', 2000);


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: "10mb" }));

app.use('/', routes);

app.listen(app.get('port'), () => {
  console.log(`server on port`, app.get(`port`))
});

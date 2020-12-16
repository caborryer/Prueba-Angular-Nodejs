const app = require("express")();
const bodyParser = require("body-parser");
const cors = require("cors");

app.set('port', 2000);


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: "10mb" }));

app.listen(app.get('port'), () => {
  console.log(`server on port`, app.get(`port`))
});

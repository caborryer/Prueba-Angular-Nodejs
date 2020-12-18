const express = require('express');
const routes = require('./routes/routes');
const {port} = require('./config/config');


const app = express();


app.use('/', routes)
app.listen(port, () => console.log(`server on port ${port}`));



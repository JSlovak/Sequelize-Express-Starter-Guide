/*jshint esversion: 6*/

let express = require('express');
let app = express();

let db = require('./models');

app.listen(3000, () => {
  db.sequelize.sync();

});
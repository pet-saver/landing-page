'use strict';

const express = require('express');

exports.startServer = function(port, path, callback) {
  const app = express();

  app.use(express.static(__dirname + '/public'));

  app.get('/', function (req, res) {
    res.status('200').send('Service is up');
  });

  app.listen(port, callback);
};
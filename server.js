'use strict';

const express = require('express');

exports.startServer = function(port, path, callback) {
  const app = express();

  app.use('/', express.static(__dirname + '/public/'));

  app.listen(port, callback);
};
'use strict';

const bmp = require('./model/bitmap-constructor.js');

const colorTable = bmp(function(err, bitmap) {
  if (err) throw err;
});

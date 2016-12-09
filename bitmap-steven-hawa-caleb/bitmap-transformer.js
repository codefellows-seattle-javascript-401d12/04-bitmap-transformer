'use strict';

const bmp = require('./model/bitmap-constructor.js');

bmp(function(err, bitmap) {
  if (err) throw err;
  console.dir(bitmap);
});

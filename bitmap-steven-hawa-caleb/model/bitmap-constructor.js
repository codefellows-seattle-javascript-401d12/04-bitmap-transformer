'use strict';

const fs = require('fs');

const createBmp = module.exports = function(callback) {
  const bmp = {};
  fs.readFile(`${__dirname}/../../img/palette-bitmap.bmp`, function(err, data) {
    if (err) throw err;
    bmp.colorTable = data.slice(54, 1078);
    return callback(null, bmp);
  });
};

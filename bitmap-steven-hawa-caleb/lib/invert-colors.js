'use strict';

const fs = require('fs');
const bmp = require(`${__dirname}/../model/bitmap-constructor.js`);

module.exports = exports = {};

exports.invertColorTable = function(callback) {
  fs.readFile(`${__dirname}/../../img/palette-bitmap.bmp`, function(err, data) {
    var invertedBuffer = Buffer.from(data);
    bmp(function(err, data) {
      for (var i = 0; i < data.colorTable.length; i++) {
        invertedBuffer[54 + i] = 255 - data.colorTable[i];
      }
      callback(null, invertedBuffer);
    });
  });
};

exports.createInvertedBitmap = function(callback) {
  exports.invertColorTable(function(err, invertedBuffer) {
    fs.writeFile(`${__dirname}/../../img/inverted-bitmap.bmp`, invertedBuffer, function(err) {
      if (err) throw err;
      if (callback) callback();
    });
  });
};

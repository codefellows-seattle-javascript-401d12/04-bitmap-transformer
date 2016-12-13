'use strict';

const fs = require('fs');
const bmp = require(`${__dirname}/../model/bitmap-constructor.js`);

module.exports = exports = {};

// Reads the buffer from the original image, stores a copy of it as invertedBuffer, then changes each value in the color table to be 255 minus
// its original value. It then calls the callback function passed in, returning null for errors and the new, rewritten buffer.
exports.invertColorTable = function(callback) {
  fs.readFile(`${__dirname}/../../img/palette-bitmap.bmp`, function(err, data) {
    if (err) throw err;
    var invertedBuffer = Buffer.from(data);
    bmp(function(err, data) {
      for (var i = 0; i < data.colorTable.length; i++) {
        invertedBuffer[54 + i] = 255 - data.colorTable[i];
      }
      callback(null, invertedBuffer);
    });
  });
};

// Performs a writeFile, creating a file called inverted-bitmap.bmp, using the invertedBuffer created from the invertColorTable method.
exports.createInvertedBitmap = function(callback) {
  exports.invertColorTable(function(err, invertedBuffer) {
    fs.writeFile(`${__dirname}/../../img/inverted-bitmap.bmp`, invertedBuffer, function(err) {
      if (err) throw err;
      if (callback) callback();
    });
  });
};

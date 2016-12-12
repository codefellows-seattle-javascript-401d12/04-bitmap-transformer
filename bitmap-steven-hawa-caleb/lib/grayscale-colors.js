'use strict';

const fs = require('fs');
const bmp = require(`${__dirname}/../model/bitmap-constructor.js`);

// const dibHeader = bmp.colorTable;
// const dibHeader = Buffer.readInt32LE(14);
// const startPoint = 14 + dibHeader;
// const pixelArray = Buffer.readInt10LE(10);
// colorTable = Buffer.slice(startPoint, pixelArray);

module.exports = exports = {};

//reading the bitmap image
exports.grayscaleTransform = function(callback) {
  fs.readFile(`${__dirname}/../../img/palette-bitmap.bmp`, function(err, data) {
    //storing raw data (0s and 1s)
    var transformedBuffer = Buffer.from(data);
    //the value in which I am computing
    var grayValue;
    // looping through each data (bytes which is 4 bytes)
    for (var i = 54; i < 1078; i+=4) {
      // there are 4 bytes for a pixel (r,g,b,alpha) - alpha not included
      // taking the average - alpha not required for gray scale
      grayValue = (transformedBuffer.readUInt8(i) + transformedBuffer.readUInt8(i+1) + transformedBuffer.readUInt8(i+2))/3;
      transformedBuffer.writeUInt8(grayValue, i);
      transformedBuffer.writeUInt8(grayValue, i+1);
      transformedBuffer.writeUInt8(grayValue, i+2);
    }
    callback(null, transformedBuffer);
  });
};

exports.createGrayscaleBitmap = function(callback) {
  exports.grayscaleTransform(function(err, transformedBuffer) {
    fs.writeFile(`${__dirname}/../../img/grayscale-bitmap.bmp`, transformedBuffer, function(err) {
      if (err) throw err;
      if (callback) callback();
    });
  });
};

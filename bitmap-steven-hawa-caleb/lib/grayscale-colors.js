'use strict';

const fs = require('fs');
const bmp = require(`${__dirname}/../model/bitmap-constructor.js`);

module.exports = exports = {};

//reading the bitmap image
exports.grayScaleTransform = function(callback) {
  fs.readFile(`${__dirname}/../../img/palette-bitmap.bmp`, function(err, data) {
    //storing raw data (0s and 1s)
    var transformedBuffer = Buffer.from(data);
    //the value in which I am computing
    var grayValue;
    // looping through each data (bytes which is 4 bytes)
    for (var i = 54; i < transformedBuffer.length; i+=4) {
      // there are 4 bytes for a pixel (r,g,b,alpha) - alpha not included
      // take average - alpha not required for gray scale

      // could be this as well:
      // for (var i = 54; i < transformedBuffer.length/8 ; i+=4) ...
      // https://nodejs.org/api/buffer.html#buffer_buf_length

      grayValue = (transformedBuffer.readUInt8(i) + transformedBuffer.readUInt8(i+1) + transformedBuffer.readUInt8(i+2))/3;

      transformedBuffer.writeUInt8(i,grayValue);
      transformedBuffer.writeUInt8(i+1,grayValue);
      transformedBuffer.writeUInt8(i+2,grayValue);
    }
    callback(null, transformedBuffer);
  });
};

exports.createGrayScaledBitmap = function(callback) {
  exports.grayScaleTransform(function(err, transformedBuffer) {
    fs.writeFile(`${__dirname}/../../img/grayScale-bitmap.bmp`, transformedBuffer, function(err) {
      if (err) throw err;
      if (callback) callback();
    });
  });
};

'use strict';

const fs = require('fs');

module.exports = exports = {};

//Reading the bitmap image file, and storing the data collected in hex decimal values into the transformedBuffer variable. There are 4 bytes per pixel (RGBA). The transformerBuffer variable is collecting the raw buffer data from each set. In order to find the grayscale value, I looped through every 4 bytes of RGBA set and found the average of the RGB values only- excluding the alpha because it deals with transparency, and storing that into the grayscale variable. Then, I am using the writeUInt8 method ( writeUInt8(value, offset) ) to store the grayscale values and each set (4 bytes) of the collected buffer data. Lastly, we are writing the new values into the bitmap image file I created called ../img/grayscale-bitmap.bmp.
exports.grayscaleTransform = function(callback) {
  fs.readFile(`${__dirname}/../../img/palette-bitmap.bmp`, function(err, data) {
    var transformedBuffer = Buffer.from(data);
    var grayValue;
    for (var i = 54; i < 1078; i+=4) {
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

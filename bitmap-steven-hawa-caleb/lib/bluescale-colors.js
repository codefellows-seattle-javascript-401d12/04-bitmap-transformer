'use strict';

const fs = require('fs');
const bmp = require(`${__dirname}/../model/bitmap-constructor.js`);

module.exports = exports = {};

exports.blueScaleColorTable = function(callback) {
  fs.readFile(`${__dirname}/../../img/palette-bitmap.bmp`, function(err, data) {
    var blueScaleBuffer = Buffer.from(data);
    bmp(function(err, data) {
      for (var index = 0; index < data.colorTable.length; index += 4) {
        var blueAvg = parseInt(blueScaleBuffer[52 + index] + blueScaleBuffer[53 + index] + blueScaleBuffer[54 + index] / 3);
        if (blueAvg > 255) blueAvg = 255;
        blueScaleBuffer[54 + index] = blueAvg;
      }
      callback(null, blueScaleBuffer);
    });
  });
};

exports.createBlueScaleBMP = function(callback) {
  exports.blueScaleColorTable(function(err, blueScaleBuffer) {
    fs.writeFile(`${__dirname}/../../img/bluescale-bitmap.bmp`, blueScaleBuffer, function(err) {
      if (err) throw err;
      if (callback) callback();
    });
  });
};

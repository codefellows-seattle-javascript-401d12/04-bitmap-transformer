'use strict';

const fs = require('fs');
const bmp = require(`${__dirname}/../model/bitmap-constructor.js`);

module.exports = exports = {};

exports.psychedelicTransform = function(callback) {
  fs.readFile(`${__dirname}/../../img/palette-bitmap.bmp`, function(err, data) {
    var psychedelicBuffer = Buffer.from(data);
    bmp(function(err, data) {
      for (var index = 0; index < data.colorTable.length; index += 1) {
        if (psychedelicBuffer[index] > 200) {
          psychedelicBuffer[index] = 0;
        }
      }

      // forEach should work the same, but it image is presumably created unaltered before loop runs

      // data.colorTable.forEach(function(color, index) {
      //   if (index < 127) {
      //     if (color > 200) {
      //       color = 0;
      //     }
      //   }
      // });

      callback(null, psychedelicBuffer);
    });
  });
};

exports.createPsychedelicBMP = function(callback) {
  exports.psychedelicTransform(function(err, psychedelicBuffer) {
    fs.writeFile(`${__dirname}/../../img/psychedelic-bitmap.bmp`, psychedelicBuffer, function(err) {
      if (err) throw err;
      if (callback) callback();
    });
  });
};

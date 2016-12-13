'use strict';

const fs = require('fs');
const bmp = require(`${__dirname}/../model/bitmap-constructor.js`);

module.exports = exports = {};

exports.psychedelicTransform = function(callback) {
  fs.readFile(`${__dirname}/../../img/palette-bitmap.bmp`, function(err, data) {
    var psychedelicBuffer = Buffer.from(data);
    bmp(function(err, data) {
      for (var index = 0; index < data.colorTable.length; index += 1) {
        if (psychedelicBuffer[54 + index] > 200) {
          psychedelicBuffer[54 + index] = 0;
          console.log(psychedelicBuffer[54 + index]);
        }
      }
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

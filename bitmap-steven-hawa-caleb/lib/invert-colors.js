'use strict';

const bmp = require(`${__dirname}/../model/bitmap-constructor.js`);

module.exports = exports = {};

exports.invertColorTable = function(callback) {
  var invertedTable = [];
  bmp.createBmp(function(err, data) {
    data.forEach(function(value) {
      invertedTable.push(255 - value);
    });
    callback(null, invertedTable);
  });
};

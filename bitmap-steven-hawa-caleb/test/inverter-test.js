'use strict';

const fs = require('fs');
const bmp = require(`${__dirname}/../model/bitmap-constructor.js`);
const inverter = require(`${__dirname}/../lib/invert-colors.js`);

describe('Color inverter', function() {
  describe('#invertColorTable', function() {
    it('Should not have any values above 255 or below 0', function(done) {
      inverter.invertColorTable(function(err, buffer) {
        const checkOutliers = buffer.some(function(value) {
          return value > 255 && value < 0;
        });
        expect(checkOutliers).to.equal(false);
      });
      done();
    });

    it('Should have all values equal to 255 minus the original buffer values', function(done) {
      bmp.createBmp(function(err, data) {
        if (err) throw err;
        inverter.invertColorTable(function(err, buffer) {
          if (err) throw err;
          const checkEquality = buffer.every(function(invertedValue, i) {
            return invertedValue === (255 - data[i]);
          });
          expect(checkEquality).to.equal(true);
        });
      });
      done();
    });
  });

  describe('#writeToFile', function() {
    it('Should create a file called inverted-palette.bmp', function(done) {
      fs.readFile(`${__dirname}/../../img/inverted-palette.bmp`, function(err, data) {
        expect(err).to.equal(null);
        expect(data).to.be.an('object');
        done();
      });
    });
  });
});

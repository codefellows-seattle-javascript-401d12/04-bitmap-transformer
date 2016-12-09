'use strict';

const fs = require('fs');
const bmp = require(`${__dirname}/../model/bitmap-constructor.js`);
const inverter = require(`${__dirname}/../lib/invert-colors.js`);

describe('Color inverter', function() {
  describe('#invertColorTable', function() {
    before((done) => {
      this.invertedColors = inverter.invertColorTable(function(err, buffer) {
        this.checkOutliers = buffer.some(function(value) {
          return value > 255 && value < 0;
        });
      });
      done();
    });

    it('Should not have any values above 255 or below 0', (done) => {
      expect(this.checkOutliers).to.equal(false);
      done();
    });
  });
});

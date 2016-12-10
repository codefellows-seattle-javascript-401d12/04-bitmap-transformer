'use strict';

const fs = require('fs');
const createBmp = require(`${__dirname}/../model/bitmap-constructor.js`);
const inverter = require(`${__dirname}/../lib/invert-colors.js`);
const expect = require('chai').expect;

describe('Color inverter', function() {
  describe('#invertColorTable', function() {
    it('Should not have any values above 255 or below 0', function(done) {
      inverter.invertColorTable(function(err, buffer) {
        var checkOutliers = false;
        for (var i = 54; i < 1078; i++) {
          if (buffer[i] > 255 || buffer[i] < 0) checkOutliers = true;
        }
        expect(checkOutliers).to.equal(false);
        done();
      });
    });

    it('Should have all values equal to 255 minus the original buffer values', function(done) {
      createBmp(function(err, table) {
        inverter.invertColorTable(function(err, buffer) {
          var checkEquality = true;
          for (var i = 54; i < 1078; i++) {
            if (buffer[i] !== (255 - table.colorTable[i - 54])) checkEquality = false;
          }
          expect(checkEquality).to.equal(true);
          done();
        });
      });
    });
  });

  describe('#createInvertedBitmap', function() {
    it('Should create a file called inverted-palette.bmp', function(done) {
      inverter.createInvertedBitmap(function() {
        fs.readFile(`${__dirname}/../../img/inverted-palette.bmp`, function(err, data) {
          expect(err).to.equal(null);
          expect(data).to.be.an('object');
          done();
        });
      });
    });
  });
});

'use strict';

const fs = require('fs');
const createBmp = require(`${__dirname}/../model/bitmap-constructor.js`);
const inverter = require(`${__dirname}/../lib/grayscale-colors.js`);
const expect = require('chai').expect;

describe('Grayscale Manipulation', function() {
  describe('#grayscaleTransform', function() {
    it('Should transform data into a grayscale.', function(done) {
      inverter.grayscaleTransform(function(err, buffer) {
        var checkOutliers = false;
        for (var i = 54; i < 1078; i++) {
          if (buffer[i] > 255 || buffer[i] < 0) checkOutliers = true;
        }
        expect(checkOutliers).to.equal(false);
        done();
      });
    });

    describe('#createGreyscaleBitmap', function() {
      it('Should create a file called grayscale-palette.bmp', function(done) {
        inverter.createGrayscaleBitmap(function() {
          fs.readFile(`${__dirname}/../../img/grayscale-bitmap.bmp`, function(err, data) {
            expect(err).to.equal(null);
            expect(data).to.have.length.above(0);
            done();
          });
        });
      });
    });
  });
});

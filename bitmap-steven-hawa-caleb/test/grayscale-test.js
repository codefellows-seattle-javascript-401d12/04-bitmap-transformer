'use strict';

const fs = require('fs');
const grayscaleColors = require(`${__dirname}/../lib/grayscale-colors.js`);
const expect = require('chai').expect;

describe('Grayscale Manipulation', function() {
  describe('#grayscaleTransform', function() {
    it('Should transform data into a grayscale.', function(done) {
      grayscaleColors.grayscaleTransform(function(err, buffer) {
        var checkOutliers = false;
        for (var i = 54; i < 1078; i+=4) {
          if (buffer[i] > 255 || buffer[i] < 0) checkOutliers = true;
        }
        expect(checkOutliers).to.equal(false);
        done();
      });
    });

    it('Should have a similar color value', function(done) {
      grayscaleColors.grayscaleTransform(function (err, TransformBuffer) {
        var checkData = true;
        for (var i = 54; i < 1078; i+=4){
          var grayValue = (TransformBuffer.readUInt8(i) + TransformBuffer.readUInt8(i+1) + TransformBuffer.readUInt8(i+2))/3;
          if (TransformBuffer[i] != grayValue || TransformBuffer[i+1] != grayValue || TransformBuffer[i+2] !== grayValue) checkData = false;
        }
        expect(checkData).to.equal(true);
        done();
      });
    });

    describe('#createGreyscaleBitmap', function() {
      it('Should create a file called grayscale-palette.bmp', function(done) {
        grayscaleColors.createGrayscaleBitmap(function() {
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

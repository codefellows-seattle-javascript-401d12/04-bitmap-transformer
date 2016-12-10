'use strict';

const bmp = require('../model/bitmap-constructor.js');
const expect = require('chai').expect;

describe('Bitmap constructor', function() {
  describe('#createBmp', function() {
    it('Should return an object with the color table from the palette-bitmap', function(done) {
      bmp(function(err, bitmap) {
        expect(err).to.equal(null);
        expect(bitmap).to.be.an('object');
        expect(bitmap).to.have.property('colorTable');
        expect(bitmap.colorTable).to.have.length(1024);
        done();
      });
    });
  });
});

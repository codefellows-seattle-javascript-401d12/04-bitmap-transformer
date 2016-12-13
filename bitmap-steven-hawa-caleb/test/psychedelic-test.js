'use strict';

const fs = require('fs');
const createBmp = require(`${__dirname}/../model/bitmap-constructor.js`);
const psych = require(`${__dirname}/../lib/psychedelic.js`);
const expect = require('chai').expect;

describe('Psychedelic Transform', function() {
  describe('#psychedelicTransform', function() {
    it('should not have any values greater than 200', function(done) {
      psych.psychedelicTransform(function(err, color) {
        var outOfRange = false;
        for (var i = 54; i < 1078; i++) {
          if (color[i] > 200 || color[i] < 0) outOfRange = true;
        }
        expect(outOfRange).to.equal(false);
        done();
      });
    });
  });
});

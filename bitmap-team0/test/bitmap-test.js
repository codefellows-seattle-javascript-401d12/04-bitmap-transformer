'use strict'

const transformBit = require('../lib/TransformableBitmap.js');
const expect = require('chai').expect;

describe('bitmap transform module', function(){
  describe('TransformableBitmap', function(){
    it('should be a function ', function(){
      expect(transformBit).to.be.a('function');
    });
    it('should create an object', function(){
      var object = new transformBit('../img/palette-bitmap.bmp');
      console.log('test', test);
      expect(object).to.be.an('object');
    });
  });
});

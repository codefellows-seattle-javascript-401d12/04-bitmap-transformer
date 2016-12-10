'use strict';

const expect = require('chai').expect;
const interpreter = require('../lib/cli-interpreter.js');

describe('CLI Interpreter', function() {
  it('Should throw an error by default when using Mocha.', function(done) {
    expect(interpreter).to.throw(Error);
    done();
  });

  it ('Should return ["invert"] when passed the array ["Node", "bitmap-transformer.js", "invert"]', function(done) {
    var returnedArray = interpreter(['Node', 'bitmap-transformer.js', 'invert']);
    expect(returnedArray).to.have.length(1);
    expect(returnedArray[0]).to.equal('invert');
    done();
  });
});

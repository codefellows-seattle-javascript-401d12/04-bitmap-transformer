'use strict';

const cliInterpreter = require('./lib/cli-interpreter.js');
const invert = require('./lib/invert-colors.js');

const transformArray = cliInterpreter(process.argv);

if (transformArray.some(function(element) { return element.toLowerCase() === 'invert'; })) {
  invert.createInvertedBitmap(function() {
    console.log('Inverted colors of palette-bitmap.bmp.');
  });
}

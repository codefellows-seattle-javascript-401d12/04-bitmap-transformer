'use strict';

const cliInterpreter = require('./lib/cli-interpreter.js');
const invert = require('./lib/invert-colors.js');
const grayscale = require('./lib/grayscale-colors.js');
const bluescale = require('./lib/bluescale-colors.js');

const transformArray = cliInterpreter(process.argv);

if (transformArray.some(function(element) { return element.toLowerCase() === 'invert'; })) {
  invert.createInvertedBitmap(function() {
    console.log('Inverted colors of palette-bitmap.bmp.');
  });
}

if (transformArray.some(function(element) { return element.toLowerCase() === 'grayscale'; })) {
  grayscale.createGrayscaleBitmap(function() {
    console.log('Grayscale colors of palette-bitmap.bmp.');
  });
}

if (transformArray.some(function(element) { return element.toLowerCase() === 'bluescale'; })) {
  bluescale.createBlueScaleBMP(function() {
    console.log('Blue-scaled the colors of palette-bitmap.bmp.');
  });
}

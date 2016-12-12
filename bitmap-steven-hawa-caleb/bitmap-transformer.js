'use strict';

const cliInterpreter = require('./lib/cli-interpreter.js');
const invert = require('./lib/invert-colors.js');
const grayscale = require('./lib/grayscale-colors.js');

// Gets back an array of all extra arguments passed in via the CLI.
const transformArray = cliInterpreter(process.argv);

// If the argument "invert" is passed in, call the invert transform module.
if (transformArray.some(function(element) { return element.toLowerCase() === 'invert'; })) {
  invert.createInvertedBitmap(function() {
    console.log('Inverted colors of palette-bitmap.bmp.');
  });
}

// If the argument "grayscale" is passed in, call the grayscale transform module.
if (transformArray.some(function(element) { return element.toLowerCase() === 'grayscale'; })) {
  grayscale.createGrayscaleBitmap(function() {
    console.log('Grayscale colors of palette-bitmap.bmp.');
  });
}

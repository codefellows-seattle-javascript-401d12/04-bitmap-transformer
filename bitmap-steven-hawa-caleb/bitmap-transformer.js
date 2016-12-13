'use strict';

const cliInterpreter = require('./lib/cli-interpreter.js');
const invert = require('./lib/invert-colors.js');
const grayscale = require('./lib/grayscale-colors.js');
const bluescale = require('./lib/bluescale-colors.js');
const psychedelic = require('./lib/psychedelic.js');

const transformArray = cliInterpreter(process.argv);

// Series of if statements checking for the words "invert," "grayscale," and "bluescale". If they were passed in, use the appropriate module method.
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

if (transformArray.some(function(element) { return element.toLowerCase() === 'psychedelic'; })) {
  psychedelic.createPsychedelicBMP(function() {
    console.log('Psyched the colors of palette-bitmap.bmp.');
  });
}

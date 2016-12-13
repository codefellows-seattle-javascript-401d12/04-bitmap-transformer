'use strict';
const TB = require('./lib/TransformableBitmap.js');
var ourTB = new TB('../img/palette-bitmap.bmp');

ourTB.invert().grayscale().colorScale(1, 1.3, 0.8).write('out.bmp');
console.log('chained transform written to out.bmp');

const chooseTransform = require('./lib/cli.js');


chooseTransform();
// ourTB.invert().grayscale().colorScale(1,1.3,1).write('out.bmp');

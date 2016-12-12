'use strict'

const TB = require('./lib/TransformableBitmap.js');

var ourTB = new TB('../img/palette-bitmap.bmp');

console.log('height:', ourTB.height);

//ourTB.read('data/thebitmapfile.bmp');

//ourTB.greyscale();

//ourTB.invert();

//ourTB.increaseBrightness(50);

ourTB.write('../img/txbitmap.bmp');

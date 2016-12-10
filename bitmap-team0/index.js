'use strict'

const TB = require('./lib/TransformableBitmap.js');

var ourTB = new TB;

ourTB.read('data/thebitmapfile.bmp');

ourTB.greyscale();

ourTB.invert();

ourTB.increaseBrightness(50);

ourTB.write('the output transformed bitmap file');

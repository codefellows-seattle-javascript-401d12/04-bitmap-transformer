'use strict'

// const TB = require('./lib/TransformableBitmap.js');
const invertImage = require('./bitmap-team0/model/invertImage.js');
const colorTransform = require('./bitmap-team0/model/colorTransform.js');

// var ourTB = new TB;

// console.log(' ourCC: ', colorTransform.ColorChange);

//ourTB.read('data/thebitmapfile.bmp');

//ourTB.greyscale();

invertImage(); //ourTB.invertColor();

const colorchange = new colorTransform.ColorChange(28, 0,0,0);
colorchange.now() //transform colors of the picture based on index(0-31), r g b value colorTransform.colorPicker(5, 33,34, 44)

//ourTB.increaseBrightness(50);

// ourTB.write('the output transformed bitmap file');

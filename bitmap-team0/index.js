'use strict'

const TB = require('./lib/TransformableBitmap.js');

var ourTB = new TB('../img/palette-bitmap.bmp');

ourTB.invert().write('out.bmp');;

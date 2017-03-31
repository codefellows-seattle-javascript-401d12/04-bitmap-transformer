'use strict';

const fs = require('fs');

module.exports = TransformableBitmap;

function TransformableBitmap(path) {
  this.bitmap = fs.readFileSync(path);
  this.colorTableOffset = 14 + this.bitmap.readUInt32LE(14);
	//this.width = this.bitmap.readUInt32LE(18);
	//this.height = this.bitmap.readUInt32LE(22);
}

TransformableBitmap.prototype.invert = function() {
  for (var i = 0; i <= 255; i++) {
    for (var j = 0; j <= 2; j++) {
      this.bitmap[this.colorTableOffset + i * 4 + j] = 255 - this.bitmap[this.colorTableOffset + i * 4 + j];
    }
  }
  this.write('../img/invert-palette-bitmap.bmp');
  return this;
};

TransformableBitmap.prototype.grayscale = function() {
  for (var i = 0; i <= 255; i++) {
    var baseOffset = this.colorTableOffset + i * 4;
    var avg = (this.bitmap[baseOffset + 0] + this.bitmap[baseOffset + 1] + this.bitmap[baseOffset + 2])/3;
    for (var j = 0; j <= 2; j++) {
      this.bitmap[baseOffset + j] = avg;
    }
  }
  this.write('../img/grayscale-palette-bitmap.bmp');
  return this;
};

TransformableBitmap.prototype.colorScale = function(redFactor, greenFactor, blueFactor) {
  for (var i = 0; i <= 255; i++) {
    var baseOffset = this.colorTableOffset + i * 4;
    this.bitmap[baseOffset] = Math.min(Math.max(blueFactor * this.bitmap[baseOffset], 0), 255);
    this.bitmap[baseOffset + 1] = Math.min(Math.max(greenFactor * this.bitmap[baseOffset + 1], 0), 255);
    this.bitmap[baseOffset + 2] = Math.min(Math.max(redFactor * this.bitmap[baseOffset + 2], 0), 255);
  }
  this.write('../img/colorScale-palette-bitmap.bmp');
  return this;
};


TransformableBitmap.prototype.write = function(path) {
  fs.writeFileSync(path, this.bitmap);
};

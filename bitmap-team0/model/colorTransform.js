'use strict';

const fs = require('fs');
const bitmap = fs.readFileSync('./img/palette-bitmap.bmp');
module.exports = exports = {};
exports.index = [];

function rgba(i,blue, green, red, a, color, blueC, greenC, redC, aC){
 this.index = i; //index of colortable
 this.blue = blue; //offset blue;
 this.blueC = blueC; //color value
 this.green = green;
 this.greenC = greenC;
 this.red = red;
 this.redC = redC;
 this.a = a;
 this.aC = aC;
 this.color = color;
};



var colorMapStartByte = 14 + bitmap.readUInt32LE(14);
exports.colorPicker = function(){
  for(var i = 0; i < 256; i++){
   var color = '';
   var blue = bitmap.readUIntLE(colorMapStartByte, 1);
   var green = bitmap.readUIntLE(colorMapStartByte + 1,1);
   var red = bitmap.readUIntLE(colorMapStartByte + 2, 1);
   var a = bitmap.readUIntLE(colorMapStartByte + 3, 1);
   color = blue.toString()+ ' ' + green.toString() + ' ' + red.toString() + ' ' + a.toString();

   if(exports.index.filter(function(rgba){
    return rgba.color === color;}).length === 0){
    exports.index.push(new rgba(i,colorMapStartByte, colorMapStartByte + 1, colorMapStartByte + 2, colorMapStartByte + 3, color, blue, green, red, a));
   };
   colorMapStartByte += 4;
  };
  console.log(exports.index);
  return exports.index;
};
exports.colorPicker();

exports.ColorChange = function (i, r, g, b){
  this.n = i;
  this.r = r;
  this.g = g;
  this.b = b;
  this.a = 0;
};
exports.ColorChange.prototype.now = function () {
 const newImage = new Buffer(bitmap);
 var i = this.n;
 var offset = exports.index.filter(function(rgba){
  return rgba.index == i;
 })[0];
 newImage.writeUIntLE(this.b, offset.blue, 1);
 newImage.writeUIntLE(this.g, offset.green,1);
 newImage.writeUIntLE(this.b, offset.red, 1);
 newImage.writeUIntLE(this.a, offset.a, 1);
 // fs.writeFileSync('./img/changedColorImage.bmp', newImage);
 return fs.writeFileSync('./img/changedColorImage.bmp', newImage);
};
// var x = new ColorChange(9, 0, 0, 0);
// console.log('newImage', x.now());

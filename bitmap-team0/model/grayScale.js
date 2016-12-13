'use strict';

const fs = require('fs');
const bitmap = fs.readFileSync('./img/palette-bitmap.bmp');
const arr = require('./colorTransform.js');
console.log('grayScale',arr.index[0]);
module.exports =  function grayScaler(){
 const invertImage = new Buffer(bitmap);
 for(var i = 0; i < arr.index.length; i++){
  var color = (arr.index[i].blueC + arr.index[i].greenC + arr.index[i].redC)/3;
    invertImage.writeUIntLE(color, arr.index[i].blue, 1);
    invertImage.writeUIntLE(color, arr.index[i].green, 1);
    invertImage.writeUIntLE(color, arr.index[i].red, 1);
    invertImage.writeUIntLE(arr.index[i].aC, arr.index[i].a, 1);
 };
 return fs.writeFileSync('./img/grayScale.bmp', invertImage);
};

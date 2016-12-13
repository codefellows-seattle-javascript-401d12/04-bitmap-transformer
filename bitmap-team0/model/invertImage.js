'use strict';

const fs = require('fs');
const bitmap = fs.readFileSync('./img/palette-bitmap.bmp');
const arr = require('./colorTransform.js');

module.exports =  function invertColor(){
 const invertImage = new Buffer(bitmap);
 for(var i = 0; i < arr.index.length; i++){
    invertImage.writeUIntLE(255 - arr.index[i].blueC, arr.index[i].blue, 1);
    invertImage.writeUIntLE(255 - arr.index[i].greenC, arr.index[i].green, 1);
    invertImage.writeUIntLE(255 - arr.index[i].redC, arr.index[i].red, 1);
    invertImage.writeUIntLE(255 - arr.index[i].aC, arr.index[i].a, 1);
 };
 // fs.writeFileSync('./img/invertImage.bmp', invertImage);
 return fs.writeFileSync('./img/invertImage.bmp', invertImage);
};

'use strict';


const fs = require('fs');
const bitmap = fs.readFileSync(`${__dirname}/../img/palette-bitmap.bmp`);
const bmp = {};

bmp.type = bitmap.toString('utf-8', 0, 2);//BM
bmp.size = bitmap.readUInt32LE(2);//11078
bmp.reserved_one = bitmap.readUInt32LE(6);//0
bmp.reserved_two = bitmap.readUInt32LE(8);//70647808 ?
bmp.pixel_array_start = bitmap.readUInt32LE(10);//1078
bmp.header_size = bitmap.readUInt32LE(14);//40 BITMAPINFOHEADER
bmp.width = bitmap.readUInt32LE(18);//100
bmp.height = bitmap.readUInt32LE(22);//100
bmp.color_planes = bitmap.readUInt32LE(26);//524289
bmp.bpp = bitmap.readUInt32LE(28);//bits per pixel
bmp.compression_method = bitmap.readUInt32LE(30);// 0 none
bmp.image_size =  bitmap.readUInt32LE(34);//10000
bmp.horizontal_resolution = bitmap.readUInt32LE(38);//2834
bmp.vertical_resolution = bitmap.readUInt32LE(42);//2834
bmp.number_of_colors = bitmap.readUInt32LE(46);//256
bmp.important_colors = bitmap.readUInt32LE(50);//256
//bmp.image_data = bitmap.toString('hex', 1078, 1378);

bmp.dec_data = [];
bmp.image_data = bitmap.toString('hex', 1078,1100).match(/.{1,6}/g);
for (var i in bmp.image_data) {
	bmp.dec_data[i] = [];
	bmp.dec_data[i][0] = parseInt(bmp.image_data[i].substring(0,2),16);
	bmp.dec_data[i][1] = parseInt(bmp.image_data[i].substring(2,4),16);
	bmp.dec_data[i][2] = parseInt(bmp.image_data[i].substring(4,6),16);
}
console.dir(bmp);

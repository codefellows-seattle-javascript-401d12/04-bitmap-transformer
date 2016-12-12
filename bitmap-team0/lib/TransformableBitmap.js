'use strict';

//We only export the constructor. I think this means that index.js can say "const TB = require('./lib/TransformableBitmap.js');"
//and "var ourTB = new TB;"
module.exports = TransformableBitmap;

function TransformableBitmap(path) {
	//This is the constructor
	this.height = 0;
	this.width = 0;
	this.originalBitmap = new Buffer(''); //???
	this.imageData = [[]]; //???
	var originalBuffer = fs.readfileSync(path);
};


//The read method. This should read the file specified in 'path' and store it in this.originalBitmap or some other buffer.
//it could also extract the image data and store it as a 2-d array of integers in this.imageData, so we are ready to apply transforms to that data.
TransformableBitmap.prototype.read = function(path) {
};


//Need a few transform methods like invert, greyscale, blueOnly, etc?
//they should modify this.imageData.


//Need a prototype.write method, to convert imageData (which has already been transformed) back into a buffer format.
//then combine that with the file header from the original buffer, and write it to a file.
TransformableBitmap.prototype.write = function(path) {
	var pixBuf = Buffer.allocUnsafe(this.imageData.length * 3); //since there are 3 bytes per pixel
	for (var i in this.imageData; i < this.imageData.length; i++) { //this loops over the first dimension of imageData - pixels
		for(var j = 0; j < 3; j++) { //loops over the second dimension of imageData - colors
			pixBuf[i*3+j] = this.imageData[i][j].toString(16); //toString(16) converts our dec to hex
		}
	}
	pixBuf.copy(this.originalBuffer, this.imageDataOffset);
	fs.writeFileSync(path, this.originalBuffer);
};

'use strict';

const fs = require('fs');

// CreateBmp will read the palette-bitmap.bmp file, then create a colorTable array of the 1024 bytes that represent the bitmap file's color table.
// The color table is found by starting the offset after the bitmap file header and the DIB header.
// The bitmap file header is always 14 bytes.
// This particular bitmap file header identifies the file type as BM, which means the DIB header corresponds to Windows 3.1x, 95, NT, etc.
// This makes it a DIB Header with the name BITMAPINFOHEADER, which has a size of 40 bytes.
// We can double check our DIB Header size using the buffer method readInt32LE(14), which will read the signed integer 14 bytes in (where the DIB header starts).
// So, the bitmap file header and the DIB header are a combined total of 54 bytes, so our color table should start at the 54th position of our buffer.
// We know where the color table ends because the pixel array immediately follows the color table, and the pixel array can be found 10 bytes in to
// the bitmap file header using the buffer method bitmap.readInt32LE(10), which will read the signed integer 10 bytes in.
// We get back the value 1078, so we know the pixel array begins at the 1078th location.
// We can double check that our colorTable is the correct size by checking how many colors this bitmap file is expected to have.
// The DIB BITMAPINFOHEADER contains this information at an offset of 46 bytes, so if we use the buffer method readInt32LE(46), we get back a value
// of 256, meaning this bitmap file has 256 colors.
// Since each color is 4 bytes, we would expect a color table to be (256 x 4 = 1024) bytes in size. This matches our expected range of 54 bytes to 1078
// bytes (1078 - 54 = 1024), so we can be sure we have correctly selected the color table from our buffer.
const createBmp = module.exports = function(callback) { //eslint-disable-line
  const bmp = {};
  fs.readFile(`${__dirname}/../../img/palette-bitmap.bmp`, function(err, data) {
    if (err) throw err;
    bmp.colorTable = data.slice(54, 1078);
    return callback(null, bmp);
  });
};

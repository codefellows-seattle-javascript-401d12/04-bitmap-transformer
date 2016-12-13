# Bitmap Transformer
### Written by Hawa Abdi, Steven Bateman, and Caleb Sattgast

The bitmap transformer is a simple Node-based app that will allow you to change the Code Fellows-provided palette-bitmap.bmp file's color table.

### Usage

Clone down this repository, then navigate to the bitmap-steven-hawa-caleb directory in your terminal and run `npm i`.

Transform the image by running `node bitmap-transformer.js` plus any of the four following arguments: 
* `invert`
* `grayscale`
* `bluescale`
* `psychedelic` 

Each argument passed in will create a copy of the original bitmap with the appropriate transform applied.

### Example

Running `node bitmap-transformer.js grayscale invert` will create a grayScaled-bitmap.bmp and an inverted-bitmap.bmp file in the img directory, found
in the root.

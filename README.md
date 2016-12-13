## Bitmap Project:
This is a bitmap transformer built by Jonathan, Peter, and Britt.

In this project, we are converting the image below using different transforms:

![alt](https://raw.githubusercontent.com/brittdawn/04-bitmap-transformer/master/assets/palette-bitmap.bmp)

##### Our transforms are as follows:
- Green
- Invert
- Greyscale
- Black
- White
- Luminosity

##### Green Transform Formula

> Multiply the green element (color value) of the RGBA array by the max number of colors minus one (256 - 1) or 255.

##### Black & White Transform Formula

> Fill the entire colorArray / its elements with 255 or 0.

##### Invert Transform Formula

> Subtract each color value (RGB) from 255.

##### Greyscale Transform Formula

> Average the RGB color values and set the color values to this average.

##### Luminosity Transform Formula

> Multiply the red color value by .21. Multiply the green color value by .72. Multiply the blue color value by .07.

---
## To Run This Project Locally:

To run this project locally, type the following into your terminal:

1. `git clone https://github.com/brittdawn/04-bitmap-transformer.git`
2. `cd 04-bitmap-transformer/`
3. `npm i`
4. `node index.js`

The terminal will then prompt you: "Please enter one of the following: green, white, invert, greyscale, luminosity, black or all."

You may then type which transform you wish to implement, like so: `node index.js invert`.

You may now go to the assets folder and see your transformed image.

Repeat as you wish with other transforms.

---
## To Run Tests:

You can type the following into the command line: `gulp test`.

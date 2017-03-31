'use strict';

const readline = require('readline');
const TB = require('./TransformableBitmap.js');
var ourTB = new TB('../img/palette-bitmap.bmp');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

module.exports = function chooseTransform(){

  rl.question('\nDo you want to choose transformation? y/n or exit  - ', (answer) => {
    answer = answer.toLowerCase();
    switch (answer) {

    case 'y':
      console.log('\nChoose method by pressing specified key!');
      CLI();
      break;

    case 'n':
      console.log('\nRunnig all three transformation!');
      ourTB.invert().grayscale().colorScale(1,1.3,1);
      console.log('\nAll three files are generated!!');
      rl.close();
      break;

    case 'exit':
      console.log('\nFunction Exit!!');
      rl.close();
      break;

    default: console.log('\nNot right key!!\n', chooseTransform());
    }
  });
  function CLI(){
    rl.question('\ninvert: enter \'i\' \ngrayscale: enter \'g\'  \ncolorScale: enter \'c\' \nredGreenBleu: enter \'rgb\' \ntype \'exit\' and enter to quit.  - ', (answer) => {
      answer = answer.toLowerCase();
      switch (answer) {
      case 'i': ourTB.invert();
        console.log('\ninvert-palette-bitmap.bmp file is generatd!!');
        CLI();
        break;
      case 'g':ourTB.grayscale();
        console.log('\ngrayscale-palette-bitmap.bpm file is generated!');
        CLI();
        break;
      case 'c':ourTB.colorScale();
        console.log('\ncolorScale-palette-bitmap.bmp file is been generated!');
        CLI();
        break;
      case 'rgb':
        rl.question('\nChoose BLUE (b) GREEN(g) RED(r) -  ', (answer) => {
          answer = answer.toLowerCase();
          switch (answer) {
          case 'b':
            ourTB.colorScale(2,1,1);
            console.log('\nBlue-palette-bitmap.bmp file is generatd!!');
            CLI();
            break;
          case 'g':
            ourTB.colorScale(1,2,1);
            console.log('\nGreen-palette-bitmap.bmp file is generatd!!');
            CLI();
            break;
          case 'r':
            ourTB.colorScale(1,1,2);
            console.log('\nRed-palette-bitmap.bmp file is generatd!!');
            CLI();
            break;
          default: chooseTransform();
          }
        });
        break;
      case 'exit':
        console.log('\nFunction Exit!! \n');
        rl.close();
        break;
      default : console.log('\nNot the right key \n '); CLI();
      }
    });
  }
};

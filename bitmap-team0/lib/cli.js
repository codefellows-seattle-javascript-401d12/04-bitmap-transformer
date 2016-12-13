'use strict',

const readline = require('readline');
const TB = require('./TransformableBitmap.js');
var ourTB = new TB('../img/palette-bitmap.bmp');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

module.exports = function chooseTransform(){

  rl.question('Do you want to choose transformation? y/n  ', (answer) => {
    if(answer === ('y' || 'Y')){
      console.log('invert: enter \'i\'');
      console.log('grayscale: enter \'g\'');
      console.log('colorScale: enter \'c\'');
      console.log(' type \'exit\' and enter to quit');
      CLI();
    }
    if(answer === ( 'n' || 'N')){
      console.log('Runnig all three transformation!');
      ourTB.invert().grayscale().colorScale(1,1.3,1);
      console.log('All three files are generated!!');
      rl.close();
    }
    if(!(answer === ( 'n' || 'N' || 'y' || 'Y'))){
      console.log('Not right key!!\n');
      chooseTransform();
    }
    if(answer === ('exit' || 'EXIT' || 'Exit')){
      console.log('Function Exit!!');
      rl.close();
    }
  });
   function CLI(){
    rl.question('Choose method by pressing specified key! ', (answer) => {
      if(answer === ( 'i' || 'I')){
        ourTB.invert();
        console.log('invert-palette-bitmap.bmp file is generatd!!');
        CLI();
      }
      if(answer === ( 'g' || 'G')){
        ourTB.grayscale();
        console.log('grayscale-palette-bitmap.bpm file is generated!');
        CLI();
      }
      if(answer === ( 'c' || 'C')){
        ourTB.colorScale();
        console.log('colorScale-palette-bitmap.bmp file is been generated!');
        CLI();
      }
      if(!(answer === ( 'g' || 'G'|| 'i' || 'I' || 'c' || 'C' ||'exit' || 'EXIT' || 'Exit'))){
        console.log('Please enter right key!!');
         CLI();
      }
      if(answer === ('exit' || 'EXIT' || 'Exit')){
        console.log('Function Exit!!');
        rl.close();
      }
    });
}
};

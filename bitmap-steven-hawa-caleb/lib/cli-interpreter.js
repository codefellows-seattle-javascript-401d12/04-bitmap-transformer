'use strict';

// Slices out all elements of the process.argv array that gets passed in after the 1st index, effectively storing all parameters passed in to running
// node bitmap-transformer.js <transforms>
const cliArguments = module.exports = function(args) { //eslint-disable-line
  if (args.length < 3) throw new Error('No arguments passed in.');
  return args.slice(2, args.length);
};

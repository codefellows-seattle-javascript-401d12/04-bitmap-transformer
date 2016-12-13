'use strict';

const cliArguments = module.exports = function(args) { //eslint-disable-line
  if (args.length < 3) throw new Error('No arguments passed in.');
  return args.slice(2, args.length);
};

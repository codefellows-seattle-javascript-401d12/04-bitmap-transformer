'use strict';

const cliInterpreter = require('./lib/cli-interpreter.js');

const transformArray = cliInterpreter(process.argv);

console.dir(transformArray);

#!/usr/bin/env node

'use strict';

const numConver = require('.');
const { name, version } = require('./package');

if (!process.argv[2]) {
  console.log(`${name} ~ ${version}`);
  console.log('Number conver tools in command line');
  console.log('  $ conver 10');
  console.log('  $ conver 101');
  console.log('  $ conver 1000');
  process.exit(0);
}

const args = process.argv.slice(2);

let result = null;
for (const arg of args) {
  result = numConver(arg);
  console.log(`${arg}:\n`, result);
}

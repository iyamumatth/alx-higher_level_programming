#!/usr/bin/node
const argc = process.argv.length;

if (argc > 3) {
  console.log('Argument' + (argc > 4 ? 's' : '') + ' found');
} else {
  console.log('No argument');
}

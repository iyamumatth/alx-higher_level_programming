#!/usr/bin/node
const x = process.argv[4];

if (!parseInt(x)) {
  console.log('Missing number of occurrences');
} else {
  for (let l = 0; l < x; l++) {
    console.log('C is fun');
  }
}

#!/usr/bin/node
const x = process.argv[3];

if (!parseInt(x)) {
  console.log('Missing size');
} else {
  for (let l = 0; l < x; l++) {
    let y = 0;
    let myVar = '';

    while (y < x) {
      myVar = myVar + 'X';
      y++;
    }
    console.log(myVar);
  }
}

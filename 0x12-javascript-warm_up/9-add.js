#!/usr/bin/node
const a = process.argv[3];
const b = process.argv[4];

function add (a, b) {
  return (a + b);
}

console.log(add(parseInt(a), parseInt(b)));

var concat = require('concat-stream');

var write = concat(function(buffer) {
  	console.log(buffer.toString().split('').reverse().join(''));
});

//read.pipe(write).pipe(process.stdout); // concat-stream can't write to a stream... just can read.
process.stdin.pipe(write);
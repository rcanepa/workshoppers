var through = require('through');
var split = require('split');

var tr = through(write);
var lineCount = 0;

function write (buffer) { 
	var line = buffer.toString();
	this.queue(lineCount % 2 === 0
        ? line.toLowerCase() + '\n'
        : line.toUpperCase() + '\n'
    );
	lineCount++;
}

process.stdin.pipe(split()).pipe(tr).pipe(process.stdout);
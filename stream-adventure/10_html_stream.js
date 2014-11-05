// https://www.npmjs.org/package/trumpet
var trumpet = require('trumpet');

var tr = trumpet();
var stdinStream = process.stdin;
stdinStream.setEncoding('utf8');
var innerHTML = '';
var elem = tr.select('.loud').createStream();
elem.on('data', function(data){
	innerHTML = data.toString().toUpperCase();
	elem.write(innerHTML);
	elem.end();
});

stdinStream.pipe(tr).pipe(process.stdout);


/* Official solution

var trumpet = require('trumpet');
var through = require('through');
var tr = trumpet();

var loud = tr.select('.loud').createStream();
loud.pipe(through(function (buf) {
    this.queue(buf.toString().toUpperCase());
})).pipe(loud);

process.stdin.pipe(tr).pipe(process.stdout);
*/
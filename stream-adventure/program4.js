var through = require('through');

var tr = through(write, end);

function write (buf) { 
	this.queue(buf.toString().toUpperCase());
}
function end () { 
	//console.log('__END__');
	this.queue(null);
}

process.stdin.pipe(tr).pipe(process.stdout);
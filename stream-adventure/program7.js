var http = require('http');
var tr = require('through');
    
function write(buf) { 
	console.log(buf.toString());
	this.queue(buf.toString().toUpperCase());
}

function end() { 
	this.queue(null);
}

var server = http.createServer(function (req, res) {
    if (req.method === 'POST') {
        req.pipe(tr(write, end)).pipe(res);
    }
    res.end();
});
server.listen(process.argv[2]);
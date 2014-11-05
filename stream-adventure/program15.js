var crypto = require('crypto');
var zlib = require('zlib');
var tar = require('tar');
var thru = require('through');

var decipher = crypto.createDecipher(process.argv[2], process.argv[3]);
var gzip = zlib.createGunzip();
var parser = tar.Parse();

parser
	.on('entry', function (e) {
		var md5hash, path, insert;
	    
	    if (!(e.type === 'File')) return;
	    
	    md5hash = crypto.createHash('md5', { encoding: 'hex' });

	    path = ' ' + e.path + '\n';
	    
	    insert = thru(null, function(){
	    	return this.queue(path);
	    });

	    e.pipe(md5hash).pipe(insert).pipe(process.stdout);
    	return '';
		
	});

process.stdin.pipe(decipher).pipe(gzip).pipe(parser);

/*
parser
	.on('entry', function (e) {
	    if (!(e.type === 'File')) return;
	    
	    e.on("data", function (c) {
	    	content += c;
	    });

	    var d = crypto.createHash('md5', { encoding: 'hex' }).update(content).digest('hex');
		console.log(d + ' ' + e.path);
	});
*/
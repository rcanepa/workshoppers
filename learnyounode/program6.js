var module6 = require('./module6');

var path = process.argv[2];
var ext = process.argv[3];

function callback(err, data){
	if (err) throw err;
	for(i in data){
		console.log(data[i]);
	}
}

module6(path, ext, callback);
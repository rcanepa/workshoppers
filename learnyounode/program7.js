var http = require('http');

var url = process.argv[2];

/*

// Using the http.request method

var options = {
	hostname: url,
	method: 'GET'
};

var req = http.request(options, function(res){
	console.log('response: ' + res);
	res.on('data', function(data){
		console.log(data.toString());
	});
});

req.on('error', function(e){
	console.log('error: ' + e.message);
});

req.end();*/

http.get(url, function(res){
	res.on('data', function(data){
		console.log(data.toString());
	});
}).on('error', function(e){
	console.log(e);
});

/*

// An elegant solution

http.get(url, function(res){
	res.setEncoding('utf8'); // to avoid using toString function over the data
	res.on('data', console.log);
	res.on('error', console.log);
});
*/
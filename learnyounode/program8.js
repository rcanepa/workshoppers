var http = require('http');
/*var bl = require('bl');

http.get(process.argv[2], function(res){
	res.pipe(bl(function(err, data){
		if (err) throw err;
		var data = data.toString();
		console.log(data.length);
		console.log(data);
	}));
});*/

// An alternative without using the bl module

var response_data = [];

http.get(process.argv[2], function(res){
	res.on('data', function(data){
		res.setEncoding('utf8'); // to avoid using toString function over the data
		//console.log(data);
		response_data.push(data);
	});
	res.on('end', function(){
		var data = response_data.join('');
		console.log(data.length);
		console.log(data);
	});
}).on('error', function(e){
	console.log(e);
});
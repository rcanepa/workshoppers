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

function err_call(err){
	console.log(err);
}

http.get(process.argv[2], function(res){
	res.on('data', function(data){
		res.setEncoding('utf8');
		response_data.push(data);
	});
	res.on('end', function(){
		console.log(response_data.join(''));
		response_data = [];
		http.get(process.argv[3], function(res){
			res.on('data', function(data){
				res.setEncoding('utf8');
				response_data.push(data);
			});
			res.on('end', function(){
				console.log(response_data.join(''));
				response_data = [];
				http.get(process.argv[4], function(res){
					res.on('data', function(data){
						res.setEncoding('utf8');
						response_data.push(data);
					});
					res.on('end', function(){
						console.log(response_data.join(''));
						response_data = [];
					});
				}).on('error', err_call);
			})
		}).on('error', err_call);;
	});
}).on('error', err_call);
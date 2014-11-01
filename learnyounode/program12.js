var http = require('http');

var res_data = '';

var server = http.createServer(function(req, res){
	if (req.method === 'POST'){
		req.setEncoding('utf8');
		req.on('data', function(data){
			res_data += data.toUpperCase();
		});
		req.on('end', function(){
			console.log(res_data);
			res.end(res_data);
		});

	}
})
.listen(Number(process.argv[2]), function(){
	console.log('Listening on port ' + process.argv[2]);
});
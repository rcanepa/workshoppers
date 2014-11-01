var http = require('http');
var url = require('url');

var port = process.argv[2];

var server = http.createServer(function(req, res){
	var url_parsed = url.parse(req.url, true);
	if (req.method === 'GET' && ('iso' in url_parsed.query)){
		if (url_parsed.pathname == '/api/parsetime'){
			var date = new Date(url_parsed.query.iso);
			var data_response = {
				'hour': date.getHours(),
				'minute': date.getMinutes(),
				'second': date.getSeconds()
			};
			json_response = JSON.stringify(data_response);
		}
		if (url_parsed.pathname == '/api/unixtime'){
			var data_response = {
				'unixtime': Date.parse(url_parsed.query.iso) 
			};
			json_response = JSON.stringify(data_response);
		}
		req.on('data', function(data){
		});
		req.on('end', function(){
			res.writeHead(200, { 'Content-Type': 'application/json' });
			console.log(json_response);
			res.end(json_response);
		});
	}
	else{
		res.writeHead(404);
		res.end();
	}
})
.listen(Number(port), function(){
	console.log('Listening on port ' + port);
});
var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
	var stream = fs.createReadStream(process.argv[3]);
	//stream.on('data', function(data){
	//	res.end(data.toString());	
	//});
	stream.pipe(res); 
})
.listen(Number(process.argv[2]), function(){
	console.log('Listening on port ' + process.argv[2]);
});
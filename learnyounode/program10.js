var net = require('net');

function current_date(){
	var date = new Date();
	return date.getFullYear() + '-'
		+ ('0' + (date.getMonth() + 1)).slice(-2) + '-'
		+ date.getDate() + ' '
		+ ('0' + date.getHours()).slice(-2) + ':'
		+ ('0' + date.getMinutes()).slice(-2);
}

var server = net.createServer(function (socket) {
  socket.write(current_date());
  socket.end('\n');
})
.listen(process.argv[2], function(){
	console.log('Listening on port ' + process.argv[2]);
})
.on('error', function(err){
	console.log(err);
});

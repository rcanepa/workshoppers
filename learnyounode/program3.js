var fs = require('fs');

var filename = process.argv[2];

//Async version
//
//fs.readFile(filename, function(err, data){
//	if (err) throw err;
//	console.log(data.toString().split('\n').length-1);
//})

//Sync version
var buffer = fs.readFileSync(filename);

console.log(buffer.toString().split('\n').length-1);
// without using the toString method -> is it unnecessary when using encoding
// console.log(fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1);
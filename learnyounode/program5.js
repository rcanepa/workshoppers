var fs = require('fs');

var path = process.argv[2];
var fileext = '.' + process.argv[3];

function checkExtension(ext){
	return function(element, index, array){
		return element.indexOf(ext) >= 0;
	};
}

fs.readdir(path, function(err, files){
	if (err) throw err;
	var filtered = files.filter(checkExtension(fileext));
	for(i in filtered){
		console.log(filtered[i]);
	}
})

/*

// Another solution using the path module

var fs = require('fs')
var path = require('path')

fs.readdir(process.argv[2], function (err, list) {
	list.forEach(function (file) {
    	if (path.extname(file) === '.' + process.argv[3])
      		console.log(file)
  	})
});
*/
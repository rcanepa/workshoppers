var fs = require('fs');

function checkExtension(ext){
	return function(element, index, array){
		return element.indexOf(ext) >= 0;
	};
}

module.exports = function(path, ext, callback){
	fs.readdir(path, function(err, files){
		if (err) return callback(err);
		var filtered = files.filter(checkExtension('.' + ext));
		return callback(null, filtered);
	});
}
var combine = require('stream-combiner');
var split = require('split');
var through = require('through');
var zlib = require('zlib');

module.exports = function () {

	var tr = through(write, end);
	var gzip = zlib.createGzip();
	var library = {};
	var current_genre = '';

	function write(data){
		if(typeof(data) === 'string' && data.length > 0){
			data = JSON.parse(data);
			if (data.type === 'genre'){
				library[data.name] = new Array();
				current_genre = data.name;
			}
			else
				library[current_genre].push(data.name);
		}
	}

	function end(){
		for (var genre in library){
			this.queue(JSON.stringify({'name': genre, 'books':library[genre]}) + '\n');
		}
		this.queue(null);
	}

    return combine(split(), tr, gzip)
    	.on('error', function(err){
    		console.log(err);
    	});
}
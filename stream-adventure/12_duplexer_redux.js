var through = require('through');
var duplexer = require('duplexer');


module.exports = function(counter){
	var countries = {};
	var tr = through(write, end);
	
	function write (buffer) {
		var country = buffer.country;
		var keys = Object.keys(countries);
		//if (country in countries)
		if (countries.hasOwnProperty(country))
			countries[country] += 1;
		else
			countries[country] = 1;
		// or countries[country] = (countries[country] || 0) + 1;
	}

	function end (){
		counter.setCounts(countries);
	}

	return duplexer(tr, counter);
};
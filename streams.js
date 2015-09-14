/*
 * Streams arre one of Node.js's more interesting features. They allow you to pipe data 
 * from one command to another, just like witg command line tools.
 */


var stream = require('stream');

var a = 0;
var b = 1;

var rs = new stream.Readable();

rs._read = function () {
	if (b < 144){
		setTimeout(function () {
			var c = a + b;
			
			a = b;
			b = c;
			rs.push('' + c );

		}, 100);

	}else{
		this.push(null)
	}
};

module.exports = rs;
//rs.pipe(process.stdout);
//process.stdout.on('error', process.exit);

var ws = new (require('stream').Writable)();

var fib = require('./streams');

ws._write = function (chunk, encoding, next) {
	console.log(chunk.toString());
	next();
};

fib.pipe(ws);
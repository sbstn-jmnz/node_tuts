 
//This is the object oriented way. First it's constructor

function Cart () {
	this.items = [];
}

// Then the mothods

Cart.prototype.addItem = function(name, price) {
	this.items.push({
		name: name,
		price: price
	});
};

Cart.prototype.total = function () {
	return this.items.reduce(function(a,b){
		return a + b.price;
	},0);
};

/*
The export method changes, it not that simple

exports.something = 'else';

this file has an object module like this

var module = {
	exports: {} // This is the object filled with our code
}

*****Shotcut***

var exports = module.exports;

exports.one = 1;

exports = 2 

This is going to overwrite the exports objects and is not longer pointing to module.exports
even though it steel exists.

So, finally the good way to go is:

module.exports = Cart;
*/ 

module.exports = Cart; //This way the cart function is going to be returned, instead of a cart object 

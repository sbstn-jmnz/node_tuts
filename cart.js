var items = []; //This variable is only accesible in this file, in other words is private

function addItem (name, price) {
	items.push({
		name: name,
		price: price
	});
}

function total () {
	return items.reduce(function(a,b){
		return a + b.price;
	},0);
};

exports.addItem = addItem;
exports.total = total;

/*
 * This code is just one cart, adn there is no way of instantiate it in different objects
 */
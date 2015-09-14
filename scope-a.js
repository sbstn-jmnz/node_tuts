
//Traditional way. This cannot be required or called from another file

/*
var one = "one";

function two() {
	return "two";
}
*/

//Highest level object. This can be called from other files, but is not the proper way	 

global.three = "trhee";

global.four = function four() {
	return "four";
}

/*
 This is one way of makeing things abailable in other file,
 but modules is the correct way to do it
*/

exports.five = "five";

exports.six = function () {
	return "six";
};
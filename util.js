//This is a module that node uses internally, but we can use it

var util = require('util');

var log = util.debuglog('fulcrum');
var log2 = util.debuglog('foobar');

log('This is a message'); 
log2('This is a second message');

/*
 * In order to activate the above code we need to set the NODE_DEBUG variable when calling the script
 
 *	NODE_DEBUG=foobar,fulcrum node util.js
	FULCRUM 30860: This is a message
	FOOBAR 30860: This is a second message 
 */
 
var person = {
	name: 'Andrew',
	interests: ['javascript', 'books']
};

console.log(util.format('%s : %j', person, person)) // %s string, %d number, %j json 
console.log('***********************************************************************');
console.log(util.inspect(util, {colors: true}))

function User () {

}

User.prototype.loggedIn = function () {
	return true;
};

function Admin () {

}

/*
 * util.isArray({});
 * false
 * util.isArray([]);
 * true
 * util.isNull(null);
 * true
 * util.isNullOrUndefined(undefined);
 * true
 */

//This make an Admin do everething on the user functions 
util.inherits(Admin,User);
/*
 * This is what it does
 
 Admin.prototype.prototype === User.prototype;

 *Can add its own functionality without overwriting the User.prototype but use the fuctionaluty of User
 */

admin = new Admin();

console.log(admin.loggedIn());
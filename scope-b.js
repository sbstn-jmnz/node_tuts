require('./scope-a'); 
var mod_a = require('./scope-a'); //This returns the module object

/*
 * The code down below is going to fail
 */
//console.log(one);
//console.log(two());

/*
 * The code down below is going to work
 */

console.log(three);
console.log(four());

console.log(mod_a.five);
console.log(mod_a.six());

//Publish and subscribe patern
 
var EventEmitter = require('events').EventEmitter;  //the constructor is a method of the object

var ee = new EventEmitter();

//Listeners for the event
ee.on('someEvent',function(data){
	console.log('someEvent', data);
});

ee.once('someEvent', function(){
	console.log('only once');
})

function callback () {
	console.log('manual once');
	ee.removeListener('someEvent', callback) //This is called only once because it manually removes itself
}

ee.on('someEvent', callback);

//Triggers the event
ee.emit('someEvent', {option: true});
ee.emit('someEvent', {option: false});


//Use event emitter as an extension of our own constructor functions
var util = require('util');

function UserList () {
	this.list = [];
	EventEmitter.call(this); //The UserList constructor calls the EventEmitter constructor as a SuperConstructor with the UserList instance as a parameter
}
/*
 * This is magic! The prototype object of the UserList is the EventEmitter prototype.
 * This allows UserList as a subclass of EventEmitter and has the on and once methods
 */
util.inherits(UserList, EventEmitter); 

UserList.prototype.add = function (name) {
	this.list.push(name);
	//Emits the event 'new-user' when called
	this.emit('new-user', name);
}

var list = new UserList();
//Listen to the 'new-user' event
list.on('new-user', function(name){
 console.log('hello ', name);
});

list.add('Shawn');
list.add('Gus');
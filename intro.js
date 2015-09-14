var fs = require('fs');
console.log("Starting");
fs.readFile("/home/sbstn/Desktop/ClasesBootCamp/files/sample.txt",function(error,data){
	console.log("Contents: "+ data);
});
console.log("Carry on executing");


"use strict";

//Initialize Function blockBinding
function blockBinding(){
	let rollNum = 123;

	if(true){
		let rollNum = 456;
		console.log(rollNum, "inside if condition"); //456
	}
	console.log(rollNum, "outside if condition") //123
}

blockBinding();


var i = 0;

for(let i=0; i<5; i++){
	console.log(i, "inside for loop"); //0 1 2 3 4
}
console.log(i, "outside for loop"); //0
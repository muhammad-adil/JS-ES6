"use strict";
function* logMessages(){
	console.log("Learning ES6");
	yield "Done now";
	yield "ES6";
	yield "Udemy";
}

let msg1 = logMessages();
	for(let word of msg1)
		console.log(word);

let msg = logMessages();
console.log(msg);

let output = msg.next().value;
console.log(output);

let result = msg.next().value;
console.log(result);
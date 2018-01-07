"use strict";
//A symbol is unique and immuteable.
//We can use symbols as identifiers when adding properties to an object

let key = Symbol();
let sample = Symbol();

let a = new Map();
{
	let key = Symbol();
	a.set(key, 'Udemy');
	// Here, we can get and reset 'value' as a.get(k)
	console.log(a.get(key));
}

console.log(a.get(key));	//undeined 
console.log(a.size)

//-------------------------------------------------------
let courseName = Symbol();
let course = {
	publisher: "Udemy",
	[courseName]: "ES6"
};
console.log(course);

console.log(Object.getOwnPropertyNames(course));
console.log(JSON.stringify(course));

console.log(Object.getOwnPropertySymbols(course)[0 ]);

let keySymbol = Object.getOwnPropertySymbols(course)[0];
console.log(course[keySymbol]);


var props = [];
for (var p in course){
	console.log(p);
	props.push(p);
}

	console.log(props.length);
	console.log(props);



"use strict";

var course = {
	name: "Master ES6",
	publisher: "Udemy"
};

function courseDetails(c){
	let {name,publisher,?price} = c;
	console.log(name+" "+publisher);
}

courseDetails(course);
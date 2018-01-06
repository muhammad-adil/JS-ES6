"use strict";

let s = new Set([10,20,30]);
console.log(s.has(40)) 	//false

s.add(40);
console.log(s) 	//[10,20,30,40]

s.delete(30)
console.log(s) 	//[10,20,40]
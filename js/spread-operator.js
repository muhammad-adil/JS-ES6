var number = [1,2,3,4,5];

max = Math.max(...number);
console.log(max);


function logMessages(message, ...args){
	console.log(message, ...args);
}
console.log("Udemy %s : %s", "MasterES6", "Learn JavaScript");

//Proper Tail Calls - In ES5 the previous call stacks were not cleared
//In ES6 the previous call stacks are reused

function welcome(name){
	return "Hello "+name;
}

function nameTitle(name){
	return getName(name); //tail call
}

function getName(name){
	return "Mr."+name; //tail position
}

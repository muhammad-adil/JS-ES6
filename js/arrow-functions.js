
var helloWorld = function(name, greeting){
	return name +" "+ greeting;
}
console.log(helloWorld("YoYo1", "Hello, How are you"));


//Arrow Function => `\_(-.-)_/`
var newGreeting = (name, greeting) => {
	return name +" "+ greeting;	
}
console.log(newGreeting("Mark", "Hola Dude"), "Arrow Function");



//Arrow Function =>
var newGreeting = (name, greeting) => name +" "+ greeting;
console.log(newGreeting("Jack", "How are you?"), "Arrow Function");


//Arrow function => if single parameter
var newGreetingDefault = greeting => greeting;
console.log(newGreetingDefault("Start Learning Today, Dude"), "Arrow Function Single parameter");

//Arrow function => without parameter
var newGreetingNoParam = () => "Hello Single";
console.log(newGreetingNoParam(), "Arrow Function without parameter");

//-----------------------------------------------------------------------

var courses = [
	"Learn JS", "Learn Jquery", "Learn Html", "Learn CSS"
]

console.log(courses.map(course => {
	return course.toUpperCase()
	})
);

//-----------------------------------------------------------------------

var numberArr = [ 2,4,6,8,10,20,44,88,200];
var sortedArr = numberArr.sort( (a , b) => a < b ? 1: -1);
console.log(sortedArr);

//----------------------------------------------------------------------

function Course(){
	this.name = "Master ES6";
	this.description = "Learn about ES6 Features";
	this.author = "Unknown";
	this.getSummary = function(){
		return this.name + ", "+ this.description;
	};

	this.getDetails = function(){
		window.setTimeout( () => {
			console.log(this.getSummary() + " " + this.author )
		}, 2000 );
	}
}

//new instance
var course = new Course();
	course.getDetails();










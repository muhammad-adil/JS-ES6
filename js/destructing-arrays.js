var numbers = [10,20,30,40,50]

var [first,second,third,,fifth]=numbers;
console.log(fifth);

function arrayDestructuring([first,second, ...rest]){
	console.log(first);
	console.log(second);
	console.log(rest);
}

arrayDestructuring(numbers);

//Nested Destructuring Arrays
var numbers_nested = [10,20,[30,40,50]];
var [first_n, second_n, [third_n,,fifth_n]] = numbers_nested;

	console.log(first_n);
	console.log(second_n);
	console.log(fifth_n);
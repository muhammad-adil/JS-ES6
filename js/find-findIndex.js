// Array.find()
// The find() method returns the value of the first array element that passes a test function.
// This example finds (returns the value of ) the first element that is larger than 18:

var numbersArr = [4, 9, 11, 14, 16, 20, 25, 29];
var firstFind = numbersArr.find(findFunction);

function findFunction(value, index, array) {
  return value > 18;
}

console.log("First number over 18 is " + firstFind);

//function takes 3 arguments:
// The item value
// The item index
// The array itself

// Array.findIndex()
// The findIndex() method returns the index of the first array element that passes a test function.
// This example finds the index of the first element that is larger than 20:

// var numbersArr = [4, 9, 11, 14, 16, 20, 25, 29]; // as already define above
var firstFindIndex = numbersArr.findIndex(firstFindIndexFunction);

function firstFindIndexFunction(value, index, array) {
  return value > 18;
}
console.log("First number over 20 has index " + firstFindIndex);

// function takes 3 arguments:
//     The item value
//     The item index
//     The array itself

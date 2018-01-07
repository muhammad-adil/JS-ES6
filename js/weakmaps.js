//weakmap is an unordered collection of objects associated  with values
var weak = new WeakMap();

// weak.set('publisher', 'Udemy');
// console.log(weak.get('publisher'));

var course = {name: 'ES6', publisher: 'Udemy'};
var company = {name: 'john'}


weak.set(course, {price:59});
weak.set(company, "Udemy");

console.log(weak.get(company));

console.log(weak.has(course));

weak.delete(course);
weak.clear(course); //all values are removed


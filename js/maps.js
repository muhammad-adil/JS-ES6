var m = new Map();
ud = { name: 'Udemy' }
m.set(ud, 'learning ES6');

console.log(m.has(ud)); //true
console.log(m.get(ud));

console.log(ud);

for (var item of m.values()){
	console.log(item)
}
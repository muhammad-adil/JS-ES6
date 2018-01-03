var [d, m, y] = [15, 12, 2017]; // var d=15, m=12, y=2017;

// console.log(m); 
//[m,y] = [y,m]

// console.log(y);
// console.log(m);

function getDate(){ return [15,12,2017]; 
	var [d,m] = getDate();
	var [,,y] = getDate();
}
console.log(d);
console.log(m);
console.log(y);


function currentDate(){ return {d:15, m:12, y:2017}; }
var {m: month, y:year } = currentDate();
console.log(month);
console.log(year);

//--swap
var {m,y} = currentDate();
console.log(m);
console.log(y);

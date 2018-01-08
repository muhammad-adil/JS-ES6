"use strict";


class Shape {
	constructor(l , b){
		this.l = l;
		this.b = b;
	}

	render(){
		console.log("Rendering Shape");
	}
}


//class extend
class Circle extends Shape {
	constructor(l , b , radius){
		super(l , b);
		this.radius = radius;
	}

	static get pi(){
		return 3.14;
	}

	get area(){
		return Circle.pi * this.radius * this.radius;
	}

	render(){
		console.log("rendering circle");
	}
}


//now call
var obj = new Circle(0 , 0 , 20);
console.log("Length "+obj.l);
obj.l = 40;
console.log("Length "+obj.l);

console.log("Breadth "+obj.b);
console.log("Radius "+obj.radius);

console.log("Pi "+Circle.pi);
console.log("Area of Circle "+obj.area);
obj.render();

//A Promise is an object that is used as a placeholder for the eventual results of a deferred (and possibly asynchronous) computation.

//jquery ajax way
$.ajax("https://reqres.in/api/users",{
	success: function(data){
		console.log(data);
		console.log(data.data, 'jquery ajax way');
	},
	error: function(){
		console.log("failed to get data");
	}
});


//fetch way
fetch("https://reqres.in/api/users", {
	method: 'get'
}).then(function(response){	//promise
	return response.json();
}).then(function(data){
	console.log(data.data , 'Fetch Promise ');
}).catch(function(){
	console.log("failed to fetch data");
});


//Constructor
var promise = new Promise(function(resolve, reject){
	if(success){
		resolve(data);
	}
	else{
		reject("Error");
	}
});


//another way
var promise1 = new Promise(function(resolve, reject){

	$.ajax("https://reqres.in/api/users",{
		success: function(data){
			resolve(data);
		},
		error: function(){
			reject("Error")
			// console.log("failed to get data");
		}
	});

});

promise.then(function(result){
	console.log(result);
}, function(err){
	console.log(err);
});


//Promis.all([promise])
Promise.all([promise, promise1]).then(function(results){
	// results[0];
	// results[1];
}, function(){


});


// Promise.race([promise]);
// Promise.reject([reason]);
// Promise.resolve([value]);

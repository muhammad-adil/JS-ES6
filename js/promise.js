


//jquery ajax way
$.ajax("https://reqres.in/api/users",{
	success: function(data){
		console.log(data);
		console.log(data.data);
	},
	error: function(){
		console.log("failed to get data");
	}
});


//fetch way
fetch("https://reqres.in/api/users", {
	method: 'get'
}).then(function(response){
	return response.json();
}).then(function(data){
	console.log(data.data);
}).catch(function(){
	console.log("failed to fetch data");
});

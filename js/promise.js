

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


//
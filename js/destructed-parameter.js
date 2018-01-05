function logMessage(msg,{name:courseName,publisher:publisherName}){
	console.log(msg+" "+courseName+" by "+publisherName);
}

logMessage("I am Learning", {name: "Master ES6", publisher:"Udemy"});
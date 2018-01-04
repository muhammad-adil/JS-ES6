function restParametersES6(firstName, lastName, ...details){
	
	console.log(firstName+" "+lastName)
	console.log(details);

	for(contact in details){
		console.log(details[contact]);
	}
}

restParametersES6("Udemy", "Studio", "https://www.udemy.com/", https://www.udemy.com/u/Adil);
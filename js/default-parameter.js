
function assignCourseES5(courseName, publishedBy){
	courseName = courseName || "Master Js & Jquery";
	publishedBy = publishedBy || "Company";

	console.log(courseName);
}

//updated 
function assignCourseES6(courseName = "Master Js & Jquery",	publishedBy = "Company"){
	console.log(courseName+" "+publishedBy);
}

assignCourseES6();
assignCourseES6("Master ReactJS");
assignCourseES6("Master ReactJS", "Udemy");

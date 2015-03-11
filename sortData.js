/* Node module which takes json object and sort data of students array in descending of score and returns object.
 @author Nikhil */

function sortArray(obj) {
	console.log("Sorting data...!");
	if(obj != null){
		//assigning array of students record to variable
		var records = obj.students;
		//sorting data in descending of score
		for (var i = 1; i < records.length; i++){
			if(records[i].score > records[i-1].score){
				var temp = records[i];
				records[i] = records[i-1];
				records[i-1] = temp;
			}
		}
		return obj;
	}
	else{
		console.log("Error : Object is empty ");
	}
}
exports.sort = sortArray;
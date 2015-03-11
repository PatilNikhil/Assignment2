/* Node module it has to functions,
1) function will take file name and json object and write it to the new .txt file.
2) function will take file name and json object and write data in xml format to the new .xml file.
 @author Nikhil */ 

var fs = require("fs");
var xml = require("xml");
//writing in .txt file
function writeTxt(fileName, data) {
	if(data != null){
		var records = data.students;
		//Assigning first line
		var result = " Id | First Name | Last Name | Score ";
		//concatinating each student details
		for (var i = 0; i < records.length; i++) {
			result += "\n "+ records[i].id + " | " + records[i].fName + " | " + records[i].lName + " | " + records[i].score;
		}
		fs.writeFile(fileName, result);
		console.log("File "+ fileName + " is created..! \n Data :\n" + result);
	}
	else{
		console.log("Error : Object is empty ");
	}
}
//writing in .xml file
function writeXml(fileName, data) {
	if(data != null){
		var sorted = data.students;
		//creating string for json
		var result = '{ "Students": [';
		for (var i = 0; i < sorted.length; i++) {
			//concatinating each student details
			result += ' { "Student": [ { "_attr": { "Id": ' + sorted[i].id + '} },{ "Name": "' + sorted[i].fName + ' ' + sorted[i].lName + '"},{ "Score": "' + sorted[i].score + '"} ] }';
			//concatinating "," upto second last record
			if(i != sorted.length - 1)	
			{
				result += ',';
			}	
		}
		result += '] }';
		//converting string to Json object and passing to xml()
		fs.writeFile(fileName, xml(JSON.parse(result), true));
		console.log("File " + fileName + " is created..! \n Data :\n" + xml(JSON.parse(result), true));
	}
	else{
		console.log("Error : Object is empty ");
	}
}

exports.writeTxt = writeTxt;
exports.writeXml = writeXml;
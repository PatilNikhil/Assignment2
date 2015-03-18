/* Node module it has to functions,
1) function will take file name and json object and write it to the new .txt file.
2) function will take file name and json object and write data in xml format to the new .xml file.
 @author Nikhil */ 

//Dependancies
var fs = require("fs");
var xml = require("xml");


var fileWrite = function() {
    console.log("Instantiating fileWrite class");
}

/*
     * @desc Function to convert given json in text format and write in .txt file.
     * @param fileName
     * @param data
     */
fileWrite.prototype.writeTxt =  function(fileName, data) {

	if(data != null){
	
		var records = data.students;
		//Assigning first line
		var result = " Id | First Name | Last Name | Score ";
	
		//concatinating each student details
		for (var i = 0; i < records.length; i++) {
	
			result += "\n "+ records[i].id + " | " + records[i].fName + " | " + records[i].lName + " | " + records[i].score;
		}
	
		//checking if file already exist or not
		fs.exists("./" + fileName, function(exist) {
	
			if(exist){
	
				fs.writeFile(fileName, result);
	
				console.log("[writeFile.js]  >> [writeTxt]  >> File "+ fileName + " is overwritten with new data. \n" + result);
	
			}
			else{
	
				fs.writeFile(fileName, result);
	
				console.log("[writeFile.js]  >> [writeTxt]  >> File "+ fileName + " is created..! \n Data :\n" + result);
	
			}
		});
		
	}
	else{
	
		console.log("[writeFile.js]  >> [writeTxt]  >> Error : Object is empty ");
	}
}

/*
     * @desc Function to convert given json in text format and write in .xml file.
     * @param fileName
     * @param data
     */
fileWrite.prototype.writeXml =  function(fileName, data) {

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
	
		//checking if file already exist or not
		fs.exists("./" + fileName, function(exist) {
	
			if(exist){
	
				//converting string to Json object and passing to xml()
				fs.writeFile(fileName, xml(JSON.parse(result), true));
	
				console.log("[writeFile.js]  >> [writeXml]  >> File "+ fileName + " is overwritten with new data. \n" + xml(JSON.parse(result), true));
			}
			else{
	
				fs.writeFile(fileName, xml(JSON.parse(result), true));
	
				console.log("[writeFile.js]  >> [writeXml]  >> File "+ fileName + " is created..! \n Data :\n" + xml(JSON.parse(result), true));
			}
		});
	}
	else{
		
		console.log("[writeFile.js]  >> [writeXml]  >> Error : Object is empty ");
	}
}

exports.fileWrite = new fileWrite();
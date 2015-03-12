/* Node module to demonstrate how to combine all 3 modules.
 @author Nikhil */

var rf = require("./readFile");
var sd = require("./sortData");
var wf = require("./writeFile");

var fileRead = rf.fileRead;
var sort = sd.sort;
var fileWrite = wf.fileWrite;

fileRead.read("source.json", function(err, data) {
	if(err){
		//displaying error if file not found
		console.log(err);
	}
	else{
		if(data != null){
			//calling sort function
			var result = sort.sortArray(data);
			//writing data in .txt file
			fileWrite.writeTxt("txtFile.txt",result);
			//writing data in .xml file
			fileWrite.writeXml("xmlFile.xml",result);
		}
	}

});

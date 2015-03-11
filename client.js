/* Node module to demonstrate how to combine all 3 modules.
 @author Nikhil */

var fileR = require("./readFile");
var sortD = require("./sortData");
var fileW= require("./writeFile")
//calling read function
fileR.read("source.json", function(err, data) {
	if(err){
		//displaying error if file not found
		console.log(err);
	}
	else{
		if(data != null){
			//calling sort function
			var result = sortD.sort(data);
			//writing data in .txt file
			fileW.writeTxt("txtFile.txt",result);
			//writing data in .xml file
			fileW.writeXml("xmlFile.xml",result);
		}
	}

});



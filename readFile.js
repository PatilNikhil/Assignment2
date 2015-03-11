/* Node module to read json file and returns valid json object.
 @author Nikhil */

var fs = require("fs");
//function to read file
function read(fileName, call) {
	
		console.log("Reading data from file...!");
		var data = fs.readFile(fileName, function(err, data){
            if(err) {
                //calling callback function with error
                call("No Such file found : " + fileName, null);
            }
            else {
                //checking valid json object
                if(IsJsonString(data)){
                    //calling callback function with data
                    call(null,JSON.parse(data));
                }      
            }
        });
		
}
exports.read = read;

//Function which checks given object is valid json or not.
function IsJsonString(str) {
    try {
        JSON.parse(str);
    } catch (e) {
    	console.log("Not a valid Json, " + e);
        return false;
    }
    return true;
}
/* Node module to read json file and returns valid json object.
 @author Nikhil */

var fs = require("fs");
//function to read file
function read(fileName, callback) {
	
		console.log("Reading data from file...!");
		var data = fs.readFile(fileName, function(err, data){
            if(err) {
                //calling callback function with error
                callback("No Such file found : " + fileName, null);
            }
            else {
                //checking valid json object
                if(isJsonString(data)){
                    //calling callback function with data
                    callback(null,JSON.parse(data));
                }      
            }
        });
		
}
exports.read = read;

//Function which checks given object is valid json or not.
function isJsonString(str) {
    try {
        JSON.parse(str);
    } catch (e) {
    	console.log("Not a valid Json, " + e);
        return false;
    }
    return true;
}

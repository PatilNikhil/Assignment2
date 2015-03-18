/* 
Node module to read json file and returns valid json object.
@author Nikhil 
*/

var fs = require("fs");

var fileRead = function(){
    console.log("Instantiating fileRead class");
}

/*
    * @desc function to read file
    * @param filename
    * @param callback 
    */
fileRead.prototype.read = function(fileName, callback) {

    console.log("[readFile.js]  >> [read]  >> Searching for file");   

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


/*
    * @desc Function which checks given object is valid json or not.
    * @param str
    */
function isJsonString(str) {

    try {
 
        JSON.parse(str);
  
    } catch (e) {
   
        console.log("[readFile.js]  >> [isJsonString]  >> Not a valid Json, " + e);
        return false;
    }
    return true;
}

exports.fileRead = new fileRead();
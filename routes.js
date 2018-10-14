var path = require("path");
var home = require('./../controllers/homeController.js');

module.exports = function(app){
    app.post('/registerUser', function(req, res){ //step 5 and 6
        console.log("in the routes") //note: this will log in express terminal NOT in the browser console 
        home.registerUser(req,res)
    })

    app.post('/loginUser', function(req, res){ 
        console.log("logging in from routes");
        
        home.loginUser(req,res)
    })
}

var mongoose = require("mongoose");
var User = mongoose.model('User');

module.exports = {
    registerUser: function (req, res){ //step 7
        // console.log("registering from the controller"); //note: this will log in express terminal
        // console.log("name:", req.body.name, " email:", req.body.email, " password:", req.body.password, " cpassword:", req.body.cpassword); //step before creating forreal
        
        User.create({name: req.body.name, email: req.body.email, password: req.body.password, cpassword: req.body.cpassword}, function(err, userCreated){
            req.session.user = userCreated;
            res.json('success'); //step 8 - callback stuff + filling out reqs
        })

        // res.json('success'); //step 8 - callback stuff + filling out reqs
    },

    loginUser: function(req, res){
        User.findOne({email: req.body.email}, function(err, userFound){
            if(!userFound){
                console.log("error:", err);  
                res.json("fail")
            } else {
            console.log("user found:", userFound);
            req.session.user = userFound;
            res.json('success');
            }
        })
    }
}
const express = require('express');
const signupRouter = express.Router();
const Signupdata = require('../model/Signupdata');
function router(nav){
    
signupRouter.get('/',function(req,res){
    res.render("signup",
    {
    nav,
     title:'Library'
    });
    });
    signupRouter.post('/newsignup',function(req,res){
        var item = {
        name:  req.body.name,
        address: req.body.address,
        emailid: req.body.mobile,
        phoneno: req.body.gender,
        password: req.body.dob,
        confirmpassword :req.body.username,
        dateofbirth :req.body.password,
        gender:req.body.gender
        }  
       var signup =  Signupdata(item);
       signup.save();//saving to database
       res.redirect('/login');
      });
return signupRouter;
}
module.exports = router;
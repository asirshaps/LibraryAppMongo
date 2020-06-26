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
       fullname:  req.body.fullname,
         email: req.body.email,
          mobile: req.body.mobile,
          gender: req.body.gender,
          dob: req.body.dob,
           username :req.body.username,
           password :req.body.password
        }  
       var signup =  Signupdata(item);
       signup.save();//saving to database
       res.redirect('/login');
      });
return signupRouter;
}
module.exports = router;
const express = require('express');
const adminRouter = express.Router();
const Bookdata = require('../model/Bookdata');
const Authordata = require('../model/Authordata');
 

function router(nav){

    adminRouter.get('/',function(req,res){
        res.render("addBook",
        {
            nav,
            title:'Library'
        });
    });


    adminRouter.get('/auth',function(req,res){
        res.render("addAuthor",
        {
            nav,
            title:'Library'
        });
    });

        adminRouter.post('/add',function(req,res){
        var item = {
           title:  req.body.title,
           author: req.body.author,
           genre:  req.body.genre,
           image:  req.body.image
        }
       var book = Bookdata(item);
       book.save();   //saving to db
       res.redirect('/books');
    
    });

adminRouter.post('/auth/add',function(req,res){
    var items = {
       name:  req.body.name,
       bestseller: req.body.bestseller,
       award:  req.body.award,
       image:  req.body.image
    }
   var author = Authordata(items);
   author.save();   //saving to db
   res.redirect('/authors');

});
return adminRouter;
}
module.exports = router; 
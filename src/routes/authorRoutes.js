const express = require('express');
const authorsRouter = express.Router();
const Authordata = require('../model/Authordata');
function router(nav){
    // var authors = [
    //     {
    //         name: 'Paulo Coelho',
    //         bestseller: 'The Alchemist',
    //         award: 'Nielsen Gold Book Award, UK, 2004',
    //         img: "pau.jpg"
    
    //     },
    //     {
    //         name: 'Arundhati Roy',
    //         bestseller: 'The God of Small Things ',
    //         award: 'Booker Prize,1997',
    //         img: "aru.jpg"
    
    //     },
    //     {
    //         name: 'Michelle Obama',
    //         bestseller: 'Becoming',
    //         award: 'NAACP Image Award,2019',
    //         img: "mic.jpg"
    
    //     }
    // ]
     authorsRouter.get('/',function(req,res){
        Authordata.find()
        .then(function(authors){
              res.render("authors",
              {
              nav,
              title:'Library',
              authors
              });  
        });
    })
    // booksRouter.get('/single',function(req,res){
    //     res.send("Im a book");
    // });
    authorsRouter.get('/:id',function(req,res){
                 const id = req.params.id
                 Authordata.findOne({_id:id})
                .then(function(author){
                     res.render('author',
                     {
                         nav,
                         title:'Library',
                        author
                     })
                })
            })            
            authorsRouter.get('/delete/:id',function(req,res){
                const id = req.params.id;
                Authordata.findOneAndDelete({_id:id})
                    .then(function(author){
                        res.redirect('/authors');
                    });
        });
        authorsRouter.get('/edit/:id',function(req,res){
            const id = req.params.id;
            Authordata.findOne({_id:id})
                .then(function(author){
                    res.render("editAuthor",{
                        title:'Library',
                        nav,
                        author
                    });
        
                });    
        });
        
        authorsRouter.post('/update/:id',function(req,res){
            const id = req.params.id;
            Authordata.findOne({_id:id})
                .then(function(author){
                        if (!author){
                            return next(new Error('cant load'));
                        }
                        else {
                            var itemedit = {
                                name: req.body.name,
                                bestseller: req.body.bestseller,
                                award:  req.body.award,
                                image:  req.body.image
                               
                            }
                            console.log(itemedit);
                            var authoredit = Authordata(itemedit);
                            // authoredit.save();
                            Authordata.findByIdAndUpdate(id,itemedit,(er,author1) => {
                                res.redirect('/authors/'+author1._id);
                            });
                        }
                });
        });


                return authorsRouter;
}

module.exports = router;
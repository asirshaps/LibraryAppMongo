const express = require('express');
const booksRouter = express.Router();
const Bookdata = require('../model/Bookdata');
function router(nav){
    // var books = [
    //     {
    //         title: 'The Alchemist',
    //         author: 'Paulo Coelho',
    //         genre: 'Fantasy Fiction',
    //         img: "alc.jpg"
    
    //     },
    //     {
    //         title: 'The God of Small Things',
    //         author: 'Arundhati Roy',
    //         genre: 'Novel',
    //         img: "God.jpg"
    
    //     },
    //     {
    //         title: 'Becoming',
    //         author: 'Michelle Obama',
    //         genre: 'Memoir',
    //         img: "bec.jpg"
    
    //     }
    // ]
    booksRouter.get('/',function(req,res){
        Bookdata.find()
        .then(function(books){

            res.render("books",
            {
                nav,
                title:'Library',
                books
            });
        })
    
    });
    booksRouter.get('/:id',function(req,res){
                const id = req.params.id
                Bookdata.findOne({_id:id})
                .then(function(book){
                        res.render('book',
                        {
                            nav,
                            title:'Library',
                            book
                        })
    
    
                })
   
    })
    booksRouter.get('/delete/:id',function(req,res){
        const id = req.params.id;
        Bookdata.findOneAndDelete({_id:id})
            .then(function(book){
                res.redirect('/books');
            });
});
booksRouter.get('/edit/:id',function(req,res){
    const id = req.params.id;
    Bookdata.findOne({_id:id})
        .then(function(book){
            res.render("editBook",{
                title:'Library',

                nav,
                book
            });

        });    
});

booksRouter.post('/update/:id',function(req,res){
    const id = req.params.id;
    Bookdata.findOne({_id:id})
        .then(function(book){
                if (!book){
                    return next(new Error('cant load'));
                }
                else {
                    var itemedit = {
                        title: req.body.title,
                        author: req.body.author,
                        genre:  req.body.genre,
                        image:  req.body.image

                    }
                    var bookedit = Bookdata(itemedit);
                    // bookedit.save();
                    Bookdata.findByIdAndUpdate(id,itemedit,(er,book1) => {
                        res.redirect('/books/'+book1._id);
                    });
                }
        });
});
    return booksRouter;
}

module.exports = router;
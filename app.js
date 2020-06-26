const express = require('express');
const app = express();
const nav = [
                {
                    link:'/books',name:'Books'
                },
                {
                    link:'/authors',name:'Authors'
                },
                {
                    link:'/admin',name:'Add Book'
                },
                {
                    link:'/admin/auth',name:'Add Author'
                },
                {
                    link:'/login',name:'Login'
                },
                {
                    link:'/signup',name:'Signup'
                }

];
const booksRouter = require('./src/routes/bookRoutes')(nav)
const authorsRouter = require('./src/routes/authorRoutes')(nav)
 const loginRouter = require('./src/routes/loginRoutes')(nav)
 const signupRouter = require('./src/routes/signupRoutes')(nav)
 const adminRouter = require('./src/routes/adminRoutes')(nav)
//  const adminRouter1 = require('./src/routes/adminRoutes1')(nav)


 app.use(express.urlencoded({extended:true}));
app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views','./src/views');
app.use('/books',booksRouter);
app.use('/authors',authorsRouter);
app.use('/login',loginRouter);
app.use('/signup',signupRouter);
app.use('/admin',adminRouter);

app.get('/',function(req,res){
    res.render("index",
    {
        nav,
        title:'Library'
    });
});


app.listen(4005);
const http = require("http");
//const fs = require("fs");
const express=require("express")
const bodyParser= require('body-parser');

const app= express();

app.use(bodyParser.urlencoded({extended : false}));



app.use('/add-product',(req,res,next)=>{
    //console.log('In the middleware!');
    res.send('<form action="/product" method="POST"><input type="text" name="title"></input><button type="submit">Add</button></form>');
});

app.use('/product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
});

app.use('/',(req,res,next)=>{
    res.send('<h1>Hello from ExpressJS!</h1>')
});
app.listen(3000); //does work of line no. 18-23.
// const server = http.createServer(routes.requestHandler)

// const port = 3070;
// server.listen(port, () => {
//     console.log("Server is running on port", port);
// });

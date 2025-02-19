const http = require("http");
//const fs = require("fs");
const express=require("express")
const bodyParser= require('body-parser');

const app= express();


const adminRoutes= require('./routes/admin')
const shopRoutes= require('./routes/shop')

app.use(bodyParser.urlencoded({extended : false}));


app.use('/admin',adminRoutes);
app.use(shopRoutes);

app.use((req,res,next)=>{
    res.status(404).send('<h1>Page not Found</h1>');
});


app.listen(3000); //does work of line no. 18-23.
// const server = http.createServer(routes.requestHandler)

// const port = 3070;
// server.listen(port, () => {
//     console.log("Server is running on port", port);
// });

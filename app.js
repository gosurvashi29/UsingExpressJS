const http = require("http");
//const fs = require("fs");
const express=require("express")

const app= express();

app.use((req,res,next)=>{
    console.log('In the middleware!');
    next();
})

app.use((req,res,next)=>{
    console.log('In another middleware!');
    res.send('<h1>Hello from Express!</h1>');
})

app.listen(3000); //does work of line no. 18-23.
// const server = http.createServer(routes.requestHandler)

// const port = 3070;
// server.listen(port, () => {
//     console.log("Server is running on port", port);
// });

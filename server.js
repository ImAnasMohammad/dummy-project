const express = require('express');
//hello
const app = express();


app.get('/',(req,res)=>{
    res.end("Hello")
})


app.listen(5000,()=>{
    console.log("Server started successfully")
})

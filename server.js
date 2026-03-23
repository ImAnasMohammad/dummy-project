const express = require('express');
//hello hey hii
const app = express();


app.get('/',(req,res)=>{
    res.end("Hello")
})


app.listen(5000,()=>{
    console.log("Server started successfully")
})

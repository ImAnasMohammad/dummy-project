const express = require('express');

const app = express();


app.get('/',(req,res)=>{
    res.end(" sdsdfsffsdfs")
})


app.listen(5000,()=>{
    console.log("Server started successfully")
})
const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send("hello sagar ")
})

app.listen(1000)
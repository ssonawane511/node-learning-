const express = require('express');
const path  =  require('path');
const app = express();


app.get('/',(req,res)=>{
   res.sendFile( path.resolve(__dirname,'public/hello.cpp'));
})

app.get('/somenthing',(req,res)=> {
    res.send("hey somenthing is here")
})

app.post('/something',(req,res)=>{
    res.send('this is usually not visible');
})
app.listen(1000);
const  express = require("express");
// express is needed to make server work
const path = require("path");
const bodyParser = require("body-parser");
// for now we are not sending any static content 
// so we are not setting path 
const app = express();


app.use("/",express.static(path.resolve(__dirname,'public')));
// this is who we can send public folder content from server 
app.use(bodyParser.json());
// bodyParser.json() will be act middle ware 


app.post("/data",(req,res)=> {
    console.log(req.body)
    // because of body parser we will get the actual value we are sending from the fron end
    res.json({
        status:"ok"
    })
    // here res means response --- 
    // res.json ({ json content })
    // is used to send res for the request comming 

})

app.get("/",(req,res)=>{
    res.send('hey ! something\'s here');
})

app.listen(1000,()=>{
    console.log("app started at port 1000");
})
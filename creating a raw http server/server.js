const http = require('http');

const server = http.createServer( (req,res)=>{

    res.write('hello client over there');
    res.end();
})

server.listen(2000,()=>{
    console.log("server is activated at port 2000");
})
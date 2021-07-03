const http = require('http');
const hostname = '0.0.0.0';
const port = 6001;
const server = http.createServer((req,res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain; charset=utf-8');
    res.end("hi~~ 今天好熱!!!! \n")
})

server.listen(port,hostname,()=>{
    console.log("server is running at hostName:" + hostname + "port:" + port)
})
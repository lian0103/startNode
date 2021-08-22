const http = require('http');

const server = http.createServer((req,res)=>{
    // console.log('req',req.headers, req.body)
    // console.log('req',req.method , req.url)
    res.writeHead(200,{'content-type':'text/html'})
    res.write('<h1> node http module test~~ </h1>')
    res.end();

})

server.listen(8081)

console.log(server)

http.get('http://localhost:8081/123',(res)=>{
    // console.log('http get res',res)
    let body = []
    res.on('data',(bufferChunk)=>{
        body.push(bufferChunk)
    })

    res.on('end',()=>{
        body = Buffer.concat(body)
        console.log(body.toString())
    })
})
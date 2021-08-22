const net = require('net')

const server = net.createServer((socket)=>{
    let address = server.address();
    let msg = "server address is" + JSON.stringify(address)

    //發送資料
    socket.write(msg,()=>{
        let writeSize = socket.bytesWritten;
        console.log(msg + 'has send')
        console.log('the size is' + writeSize)
    })

    //監聽事件
    socket.on('data',(data)=>{
        console.log(data.toString())
        console.log('read size is '+socket.bytesRead)
    })

})

server.listen(8000,function(){
    console.log('server is listenning on 8000')
})
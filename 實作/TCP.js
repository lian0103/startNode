const net = require('net')

const server = new net.Server()

server.on('connection', (socket) => {
    // console.log('someone connected!',socket);
});

server.listen(8000,()=>{
    const address = server.address();
    console.log(address)
})

server.on('listening', () => {
    console.log('server listening');
});

server.on('close', () => {
    console.log('server cloesd');
});

server.on('error', (err) => {
    console.log('server err',err);
});
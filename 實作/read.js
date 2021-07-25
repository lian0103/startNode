var fs = require("fs");

//非阻塞執行序
fs.readFile("read.txt", "utf-8", function (err, data) {
  if (err) {
    console.log(err.stack);
    return;
  }
  console.log("pointC:" + data.toString());
});

//阻塞執行序
try {
  let data = fs.readFileSync("read.txt", "utf-8");

  console.log("pointA :" + data);
  console.log("data.length", data.length);

  console.log("in reading! pointB");
} catch(err) {
    console.log(err)
}

//read buffer.txt
fs.readFileSync('buffer.png',function(err,data){
    console.log(data)
})


//file open

let fBuf = new Buffer.alloc(1024);
fs.open('read.txt','r+',function(err,fd){
    if(err){
        console.error(err)
    }
    console.log('開啟成功')

    fs.read(fd,fBuf,0,fBuf.length,0,function(err,bytes){
        console.log(bytes+ '位元數被讀取')

        if(bytes>0){
            console.log(fBuf.slice(0,bytes).toString());
        }

    })
});




//file write
let wData = 'test file write~~ 0000';
fs.writeFile('out.txt',fBuf,function(err){
    if(err){

    }else{
        console.log("寫入完成")
    }
})
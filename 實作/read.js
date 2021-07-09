var fs = require("fs")

//非阻塞執行序
fs.readFile('read.txt',function(err,data){
    if(err){
        console.log(err.stack)
        return
    }
    console.log("pointC:"+data.toString())
})

//阻塞執行序
let data = fs.readFileSync('read.txt');

console.log("pointA :"+data);

console.log("in reading! pointB")

// pointA :Hi~~~ this is String in read.txt
// in reading! pointB
// pointC:Hi~~~ this is String in read.txt
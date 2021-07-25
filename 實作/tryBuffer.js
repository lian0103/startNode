const buf = Buffer.from('abcde','ascii');

console.log(buf)

console.log(buf.toString())

console.log(buf.toString('hex'))

console.log('base64',buf.toString('base64'))

let buf1 = Buffer.alloc(256)
let len = buf1.write('www.yahoo.com')

console.log("buf1",buf1)
console.log("len",len)
console.log("buf1",buf1)

let bufABC = Buffer.alloc(26)

for(var i=0;i<26;i++){
    bufABC[i] = i + 97;
}

console.log(bufABC)

console.log(bufABC.toString('ascii'))

console.log(bufABC.toString('utf8',0,10))

let abcJson = bufABC.toJSON();

abcJsonToBuf = Buffer.from(abcJson.data);

console.log(bufABC.toJSON())

console.log(abcJsonToBuf)

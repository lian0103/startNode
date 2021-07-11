//array
//1.push
//2.pop
//3.shift
//4.unshift
//5.splice
//6.concat
//7.slice

let arr = [1,19,2,31,40];

arr.push(100)
console.log(arr.pop())
console.log(arr.shift())
console.log(arr.unshift(-1))
console.log(arr.splice(1,2))
console.log(arr.concat([111,222]))
console.log('arr',arr)
console.log('slice',arr.slice(0,1))

//str -> arr
//1.split

let str = "55aabc";

let strArr = str.split('')

console.log(strArr);

//排序
//1.sort
//2.reverse

let arr2 = [100,-2,39,43,22]
console.log('sort:', arr2.sort())

console.log('sort:',arr2.sort((a,b)=>a-b))

console.log('sort:',arr2.sort((a,b)=>b-a))

console.log('reverse',arr2.reverse())

//loop
//1.forEach
//2.map
//3.filter
//4.every
//5.some
//6.reduce
let arr3 = [1,2,4,10,22]

arr3.forEach((val,index,oriArr)=>{
    console.log(val,index,oriArr)
})

let nArr = arr3.map((val,index,oriArr)=>{
    console.log(val,index,oriArr)
    return val * 2
})

console.log("nArr",nArr)

console.log("filter",nArr.filter(val=>val>10))

console.log("every",nArr.every(val=>val>10))

console.log("some",nArr.some(val=>val>10))

console.log("reduce",nArr.reduce((a,b)=>{return a-b}))

console.log("reduce initialVal 100",nArr.reduce((a,b)=>{return a-b},100))

//something has length to be an arr
//Array.from()
//Array.of()
//Array.copyWithin()
//find
//findIndex
//fill
//includes
let str2 = "abccee123";
let obj = {a:1,b:2}
let obj2 = {1:'aaa',2:'ccc',length:3}

console.log(Array.from(str2))
console.log(Array.from(obj))
console.log(Array.from(obj2))
console.log(Array.of(str2))

let arr4 = [1,3,5,7,9,11,13,15];
// console.log(arr4.copyWithin(1))
// console.log(arr4.copyWithin(2))
// console.log(arr4.copyWithin(2,3,5))
let arr5 = [NaN,100]

console.log(arr4.find(val=>val>10))
console.log(arr4.findIndex(val=>val>10))
console.log(arr4.fill(99))
console.log(arr4.includes(99))
console.log(arr5.includes(NaN))

//keys
//values
//entries
let arr6 = [1,22,100]

for (let key of arr6.keys()){
    console.log('key',key)
}

for (let val of arr6.values()){
    console.log('val',val)
}

for (let item of arr6.entries()){
    console.log('item',item)
}


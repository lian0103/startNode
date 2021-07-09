let a = 0 ;

setTimeout(()=>{
    console.log(a);
},0)

a = 1;

setTimeout(()=>{
    console.log(a);
},1000);

a = 2;

// 2
// 2
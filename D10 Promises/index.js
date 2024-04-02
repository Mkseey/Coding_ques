
console.log("start");
Promise.resolve().then(()=>{
    console.log("promises 1")
});
setTimeout(()=>console.log("setTimeout 1 "),100);
Promise.resolve().then(()=>{
    console.log("promises 2")
});
setTimeout(()=>console.log("setTimeout 2 "),0);
console.log("End");
//-----------------------------------------------------------------------------------------
console.log("Start");
setTimeout(() => console.log("First timeout"), 0);
setTimeout(() => console.log("Second timeout"), 100);
setTimeout(() => console.log("Third timeout"));
console.log("End");
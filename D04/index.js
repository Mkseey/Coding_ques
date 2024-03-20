//find the even numbers in the array using the filter method using arrow funcion and normal function


function FindEvenNumbers () {
    let arr = [12,11,30,33,40,42];

    let result;
    result =  arr.filter((item)=>{if(item%2 == 0) {return item }})

    // result =  arr.filter(findEvenNum)
    // function findEvenNum(item){
    //console.log("sdsdsd",item)
    //   if(item%2 == 0){
    //     return item
    //   }
    // }

    console.log("result",result)

}

FindEvenNumbers()

console.log(typeof({})) //object 
console.log(typeof([])) //object
console.log(typeof(''))  //string
console.log(typeof(true)) //boolean
console.log(typeof(2122.44)) //number
console.log(typeof(null))   // object
console.log(typeof function () {}) //function





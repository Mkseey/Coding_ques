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
//=================================================================
//How to find the object is empty or not 
let obj={}

console.log("object length",obj.length)

console.log("-------------------------------")

console.log("Typeof empty object",typeof({})) //object 
console.log("Typeof empty array",typeof([])) //object
console.log("Typeof string",typeof(''))  //string
console.log("Typeof boolean",typeof(true)) //boolean
console.log("Typeof empty number",typeof(2122.44)) //number
console.log("Typeof  null",typeof(null))   // object
console.log("Typeof empty function",typeof function () {}) //function
console.log("Typeof empty undefined",typeof undefined) //undefined
console.log(typeof Undefined) //undefined
console.log("-------------------------------")
let student = {
    name:"kartik",
    age:28
}
console.log(student?.name)
console.log(typeof(student))
console.log(student?.data) // uses the optional chaining

console.log("-------------------------------")
console.log("compare empty array",[] == [])
console.log("compare empty array", [] === [])
console.log("compare empty string","" == "")
console.log("compare empty string","" === "")
console.log("compare empty object",{} == {})
console.log("compare empty object",{} === {})
console.log("-------------------------------")
console.log("compare typeof empty array",typeof([]) == typeof([]))
console.log("compare typeof empty array", typeof([]) === typeof([]))
console.log("compare typeof empty string","" == "")
console.log("compare typeof empty string","" === "")
console.log("compare typeof empty object",typeof({}) == typeof({}))
console.log("compare typeof empty object",typeof({}) === typeof({}))











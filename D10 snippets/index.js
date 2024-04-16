
// code snippet 1

// console.log("start");
// Promise.resolve().then(()=>{
//     console.log("promises 1")
// });
// setTimeout(()=>console.log("setTimeout 1 "),100);
// Promise.resolve().then(()=>{
//     console.log("promises 2")
// });
// setTimeout(()=>console.log("setTimeout 2 "),0);
// console.log("End");

//-----------------------------------------------------------------------------------------
// code snippet 2
// console.log("Start");
// setTimeout(() => console.log("First timeout"), 0);
// setTimeout(() => console.log("Second timeout"), 100);
// setTimeout(() => console.log("Third timeout"));
// console.log("End");

//-----------------------------------------------------------------------------------------

// code snippet 3
// function outer() {
//     var count = 0;
//     function inner() {
//         count++;
//         console.log(count);
//     }
//     return inner;
// }
// const counter = outer();
// counter(); 
// counter();

//---------------------------------------------------------------------
//code snippet 06

// console.log("data",1+ +'2') 
// console.log("data",1+ +'2'+'2') 

// var a=5;
// var b= a++;
// var c =++a;
// console.log(a,b,c)

//---------------------------------------------------------------------------------

//code snippet 07 
// function Person(name) {
//     this.name = name;
// }

// Person.prototype.getName = function () {
//     return this.name;
// };

// var john = new Person('John');

// setTimeout(function () {
//     console.log(john.getName());
// }, 1000);
// console.log('Start');

// setTimeout(function() {
//     console.log('Timeout');
// }, 0);

// Promise.resolve().then(function() {
//     console.log('Promise');
// });

// console.log('End');



// function Person(name) {
//     let names= name 
//     console.log("asdf",names)
// }


// Person.prototype.getName =  (name) => {
//     return name;
// };

// var john = new Person('John');

// setTimeout(function () {
//     console.log(john.getName());
// }, 1000);
// console.log('Start');

// setTimeout(function() {
//     console.log('Timeout');
// }, 0);

// Promise.resolve().then(function() {
//     console.log('Promise');
// });

// console.log('End');




//--------------------------------------------------
//code snippet 08

// var myVar = 'outer';
// function hoistingExample() {
//     console.log(myVar);
//     var myVar = 'inner';
// }
// hoistingExample();


//----------------------------------------------------

//code snippet 09

// function outer() {
//     var x = 10;
//     function inner() {
//         console.log(x);
//         // return x
//     }
//     x = 20;
//     return inner;
// }
// var closureFn = outer();
// closureFn();
// outer()

//-------------------------------------------------------

//code snippet 09

// function data(){
//     var a = 10;
//     var b = new Number(3)
//     console.log("",a == b)
//     console.log("",a === b)
//     console.log("",typeof(a) == typeof(a))
//     console.log("",typeof(a) === typeof(a))
//     console.log("type of a", typeof(a))
//     console.log("type of a", typeof(b))
// }
// data()

//-------------------------------------------------------------

// code snippet 10

// function createBase(baseNumber) {
//     return function(N) {
//       // we are referencing baseNumber here even though it was declared
//       // outside of this function. Closures allow us to do this in JavaScript
//       return baseNumber + N;
//     }
//   }
  
//   var addSix = createBase(6);
//   addSix(10);
//   addSix(21);

// console.log("")
//----------------------------------------------------------------------

//code snippet 11


// const a= {
//     dev :"hii",
//     update:name =>{
//         this.dev =name
//         // console.log("name",name);
//     }
// }
// a.update("hello");
// console.log(a.dev);

//-------------------------------------------------------------------------


//code snippet 12

// const management =employee =>{
//   const salary = 1000; //hidden data
//   return () =>{
//     Object.assign(employee,{
//       salary,
//     })
//     return employee; //{name: "naruto", salary : 10000}
//   }
// }

// const employee = {
//   name:"naruto",
//   salary:null,
// }
// const payroll = management(employee);
// console.log("dagf",payroll());
//---------------------------------------------------
//code snippet 13
// const attackOnMks =() =>{
//   const character1 = "mks";
//   return() =>{
//     const character2 = "data";
//     return() =>{
//       const charater3 = 'list';
//       return () =>{
//         return [character1,character2,charater3]
//       };
//     };
//   };
// };
// console.log("function console",attackOnMks()()()());

//-----------------------------------------------
//code snippet 14

// function MyObject(name, message) {
//   this.name = name.toString();
//   this.message = message.toString();
//   this.getName = function () {
//     return this.name;
//   };

//   this.getMessage = function () {
//     return this.message;
//   };
// }

// function MyObject(name, message) {
//   this.name = name.toString();
//   this.message = message.toString();
// }
// MyObject.prototype = {
//   getName() {
//     return this.name;
//   },
//   getMessage() {
//     return this.message;
//   },
// };



// function MyObject(name, message) {
//   this.name = name.toString();
//   this.message = message.toString();
// }
// MyObject.prototype.getName = function () {
//   return this.name;
// };
// MyObject.prototype.getMessage = function () {
//   return this.message;
// };

//---------------------------------------------------------
// code snippet 15
// global scope
// const e = 10;
// function sum(a) {
//   return function sum2(b) {
//     return function sum3(c) {
//       // outer functions scope
//       return function sum4(d) {
//         // local scope
//         return a + b + c + d + e;
//       };
//     };
//   };
// }

// const sum2 = sum(1);
// const sum3 = sum2(2);
// const sum4 = sum3(3);
// const result = sum4(4);
// console.log(result); 

//----------------------------------------------------------------------------------

let foo = "value";

function value () {
     foo = "name"
     function foo () {}
     console.log("data",foo)
}
value();



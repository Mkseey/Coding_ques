/***************************************************************************************/
/* Developer by:- kartik subhash mahurkar                                          ****/
/*  */

//In the dynamic typed programming or loosly coupled language without using declearing the variable can accesss it.
// -------------------------------------
var name1;
// var name1 = value1;
// var name1 = value1, name2 = value2;
var name1, name2 = value2;
// var name1 = value1, name2, /* …, */ nameN = valueN;

// -------------------------------------

// a = 10 

// {
//     console.log("asfsdf",a)
// }
// -------------------------------------

// a = 10 
// console.log("autside",a)
// {  
//     a = 20
//     console.log("asfsdf",a)
// }


// -------------------------------------


// a = 10
// {  
//     a = 20
//     console.log("asfsdf",a)
// }

// -------------------------------------

// for(var i = 0 ; i < 5 ; i++) {
//     console.log(i);
//  }
 
//  // i is printed when outside the block
//  console.log(i); 

// -------------------------------------


// for(let i = 0 ; i < 5 ; i++) {
//     console.log(i);
//  }
 
//  // i is printed when outside the block
//  console.log(i);  // ReferenceError: i is not defined
// -------------------------------------

// var a = 10;

// console.log("a before re-declaration: "+a)

// function func() {
//    // re-declared
//    var a = 20;

//    console.log("a after re-declaration: "+a);
// }

// func();

// // updated
// a = 30;

// console.log("a after updation: "+a);



// -------------------------------------

// var a = 10;

// function func() {
//    var b = 10;
//    // global scope
//    console.log("a: "+a);

//    // function scope
//    console.log("b: "+b);
// }

// func();

// // global scope
// console.log("a: "+a);

// // function scope
// console.log("b: "+b);


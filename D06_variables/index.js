var a = 10;

function func() {
   var b = 10;
   // global scope
   console.log("a: "+a);

   // function scope
   console.log("b: "+b);
}

func();

// global scope
console.log("a: "+a);

// function scope
console.log("b: "+b);
//Covert this into a flat array and then return minimum  
//value from this array without using any in build method

let data = [2,3,[5,9],8,12,87,[24,[1,44],76],6];

console.log("data",data)
//flat function to convert the all nested arrays into the single array also Infinity is to max nested array
 data = data.flat(Infinity)
// console.log(data.flat(Infinity))
let small_value = data[0]; //2
for(let i =0;i<data.length; i++){
    // console.log("data",data[i]);
   for(let j = i+1; j<data.length;j++){
    // console.log("j",data[j])
    if(small_value > data[j]){
        small_value= data[j]
    }
   }
}
console.log("data[i]-",small_value)
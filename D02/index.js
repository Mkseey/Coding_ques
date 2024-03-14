// find the missing number in the array  1 to 10

const arr= [6,3,2,4,1,5,9,10]

// let arr_total = 0;
// let total = 0;

// This formula reduces the sum for loop (n * (n + 1)) / 2 where n = 10 
// for (let totals=1; totals<=10;totals++){
//     total=total+totals
// }
// console.log("asfsf",total)
// for(let i = 0; i<arr.length; i++){
//      arr_total = arr_total + arr[i]
// }
// console.log("arr_total",arr_total)

// console.log("sdf",total-arr_total)


function findMissingNumber(arr) {
    const n = 10; // The array should contain numbers from 1 to 10
    const expectedSum = (n * (n + 1)) / 2;
    const actualSum = arr.reduce((sum, num) => sum + num, 0);
    return expectedSum - actualSum;
}

const missingNumber = findMissingNumber(arr);
console.log("The missing number is:", missingNumber);



// below code is to find the arr of without sum value. 


// const missingNumbersArray = [];

// function findMissingNumber(arr) {
//     const n = 10; // The array should contain numbers from 1 to 10
//     for (let i = 1; i <= n; i++) {
//         if (!arr.includes(i)) {
//             missingNumbersArray.push(i); // Push the missing number into the separate array
//         }
//     }
// }

// findMissingNumber(arr);
// console.log("Missing numbers array:", missingNumbersArray);


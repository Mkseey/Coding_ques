// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

const str = "hey js you r amazing e";

const vowels = [ 'a', 'e', 'i', 'o', 'u'];

let count = {};

function countVowels(data) {
    // for(let i= 0 ; i<vowels.length; i++){
    //     for(let j= 0;j < data.length; j++){
    //         if(vowels[i] === str[j]){
    //             console.log("count[vowels[i]]",count[vowels[i]])
    //          if (count[vowels[i]]) {
    //         count[vowels[i]].push(vowels[i]);
    //     } else {
    //         count[vowels[i]] = [vowels[i]];
    //     }
    //         }
    //     }
    // }


    // for (let i = 0; i < vowels.length; i++) {
    //     for (let j = 0; j < data.length; j++) {
    //         if (vowels[i] === data[j]) {
    //             if (count[vowels[i]]) {
    //                 count[vowels[i]]++;
    //             } else {
    //                 count[vowels[i]] = 1;
    //             }
    //         }
    //     }
    // }
 
    for (let i = 0; i < vowels.length; i++) {
        count[vowels[i]] = {count:0}; // Initialize count for each vowel
    }

    for (let j = 0; j < data.length; j++) {
        const char = data[j].toLowerCase(); // Convert to lowercase for case insensitivity
        if (vowels.includes(char)) {
            count[char].count++;
        }
    }


    
    return count
}
const numOfVowels = countVowels(str);

console.log(numOfVowels);

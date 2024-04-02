// function right_angle_pattern() {
//     let no = 7;
//     let size_matrix = 5;
//     for (let row = 0; row <= size_matrix; row++) {
//         let z = '';
//         for (let col = 0; col <= row; col++) {
//             if (row % 2 == 0) {
//                 if (col % 2 != 0) {
//                     no = 8
//                     z = z + no;
//                 } else {
//                     no = 7
//                     z = z + no;
//                 }

//             } else {
//                 if (col % 2 != 0) {
//                     no = 7
//                     z = z + no;
//                 } else {
//                     no = 8
//                     z = z + no;
//                 }
//             }

//         }
//         console.log(z)
//     }
// }

// right_angle_pattern();

//This square form the from 2*2  to  61 * 61 in my screen
function squarePattern() {
    let sizeMatrix = 5;
    for (let row = 0; row < sizeMatrix; row++) {
        let patternStart = '';
        for (let col = 0; col < sizeMatrix; col++) {
            if(row == 0 || row == sizeMatrix-1 ){
                patternStart = patternStart + '*' + ' '

            }else if(col == 0 ){  // This condition is for the left side of the square  i.e left border of square
                patternStart = patternStart + '*' + ' '
            }else if(col == sizeMatrix -1 ){  // This condition is for the right side of the square i.e right border of square
                 // i need this for loop to right side border came at the col = greater than 1 middle value of more than 3*3 square
                for(let spaceAdd=1; spaceAdd < sizeMatrix; spaceAdd++){
                    if(spaceAdd == sizeMatrix-1){
                        break;
                    }
                    patternStart = patternStart + '  '
                }

                patternStart =  patternStart + '*'
            }
            // else{
            //     patternStart = patternStart  + ' '  
            // }
        }
        console.log(patternStart)
    }
}
squarePattern()

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


function squarePattern() {
    let sizeMatrix = 10;
    for (let row = 0; row < sizeMatrix; row++) {
        let patternStart = '';
        for (let col = 0; col < sizeMatrix; col++) {
            if(row == 0 || row == sizeMatrix-1 ){
                patternStart = patternStart + '*' + ' '

            }else if(col == 0 ){
                patternStart = patternStart + '*' + ' '
            }else if(col == sizeMatrix -1  ){
                // console.log("col == sizeMatrix ",col )
                // console.log("sizeMatrix ",sizeMatrix )

                patternStart = patternStart + '*'
            }
            else{
                patternStart = patternStart  + ' ' 
            }
        }
        console.log(patternStart)
    }
}
squarePattern()

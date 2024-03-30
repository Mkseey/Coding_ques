function right_angle_pattern() {
    let no = 7;
    let size_matrix = 5;
    for (let row = 0; row <= size_matrix; row++) {
        let z = '';
        for (let col = 0; col <= row; col++) {
            if (row % 2 == 0) {
                if (col % 2 != 0) {
                    no = 8
                    z = z + no;
                } else {
                    no = 7
                    z = z + no;
                }

            } else {
                if (col % 2 != 0) {
                    no = 7
                    z = z + no;
                } else {
                    no = 8
                    z = z + no;
                }
            }

        }
        console.log(z)
    }
}

right_angle_pattern();
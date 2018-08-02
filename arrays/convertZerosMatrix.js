const convertZeros = (row, col, matrix) => {
    const len = matrix[row].length;

    let i = 0;

    while (i < len) {
        matrix[row][i] = 0;
        matrix[i][col] = 0;

        i++;
    }

    return matrix;
};

//console.log(convertZeros(1, 0, [[1, 2, 4], [0, 3, 1], [9, 6, 0]]));
0
const convertZerosMatrix = matrix => {
    const colsConverted = new Set();

    for (let i = 0; i<matrix.length; i++) {
        for (let j = 0; j<matrix[i].length; j++) {
            let matrixItem = matrix[i][j];

            if (matrixItem === 0 && !colsConverted.has(j)) {
                matrix = convertZeros(i, j, matrix);

                colsConverted.add(j);

                break;
            }
        }
    }

    return matrix;
};

console.log(convertZerosMatrix([
    [1, 2, 4],
    [0, 3, 1],
    [9, 6, 0]
]));

// [
//     [0, 2, 0 ],
//     [0, 0, 0 ],
//     [0, 0, 0 ]
// ]


const crossingSum = (matrix: number[][], a: number, b: number): number => {
    const rowSum = matrix[a].reduce((acc, cur) => acc + cur, 0);
    const columnSum = matrix.reduce((acc, cur, idx) => acc + cur[idx], 0);

    return rowSum + columnSum - matrix[a][b];
}

console.log(crossingSum([[1, 1, 1, 1], 
    [2, 2, 2, 2], 
    [3, 3, 3, 3]], 1, 3));
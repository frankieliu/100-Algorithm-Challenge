const extractMatrixColumn = (matrix: number[][], column: number): number[] => {
	const returnArray = [];
	matrix.forEach(row => returnArray.push(row[column]));

	return returnArray;
}

console.log(extractMatrixColumn([[1, 1, 1, 2], [0, 5, 0, 4], [2, 1, 3, 6]], 2));
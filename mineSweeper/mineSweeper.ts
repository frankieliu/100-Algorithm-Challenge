const minesweeper = (matrix: boolean[][]): number[][] => {
	// Create new matrix for return value
	const mineGrid = new Array(matrix.length);
	for (let i = 0; i < matrix.length; i += 1) {
		mineGrid[i] = new Array(matrix[0].length).fill(0);
	}

	const isValidCoordinates = (testRow, testCol) => {
		const validRow = testRow >= 0 && testRow < matrix.length;
		const validCol = testCol >= 0 && testCol < matrix[0].length;

		return validRow && validCol;
	}

	// Array and function to count abutting mines
	const countMines = (row, col) => {
		let mineCount = 0;
		for (let m = -1; m <= 1; m += 1) {
			for (let n = -1; n <= 1; n += 1) {
				// Ensure not counting self
				if (!(m === 0 && n === 0)) {
					// Adjust coordinates
					const adjRow = row + m;
					const adjCol = col + n;

					// Only test coordinates within grid
					// That contain mine (=== true)
					if (row === 0 && col === 0) {
						console.log(adjRow);
						console.log(adjCol);
					}
					if (isValidCoordinates(adjRow, adjCol) && matrix[adjRow][adjCol] === true) {
						mineCount += 1;
					}
				}
			}
		}

		return mineCount;
	}

	// Loop through existing grid
	for (let j = 0; j < matrix.length; j += 1) {
		for (let k = 0; k < matrix[0].length; k += 1) {
			mineGrid[j][k] = countMines(j, k);
		}
	}

	return mineGrid;
}

console.log(minesweeper([[true, false, false],
[false, true, false],
[false, false, false]]));
/*
const minesweeper = (matrix: boolean[][]): number[][] => {
	const adjacentCoords = [[-1, -1], [0, -1], [1, -1], [-1, 0], [1, 0], [-1, 1], [0, 1], [1,1]];
	const returnArr = Array(matrix.length).fill(Array(matrix[0].length).fill(0));

	matrix.forEach((row, rowIdx) => {
		row.forEach((cell, cellIdx) => {
			returnArr[rowIdx][cellIdx] = adjacentCoords.reduce((sum, coords) => {
				const currentRow = matrix[rowIdx + coords[0]];
				console.log(rowIdx)
				console.log(currentRow);
				if (typeof currentRow !== 'undefined') {
					const currentCell = currentRow[cellIdx + coords[1]];
					console.log(currentCell);
					if (typeof currentCell !== 'undefined') {
						if (currentCell) {	
							return sum += 1;
						} else {
							return sum;
						}
					} else { return sum; }
				} else { return sum; }
			}, 0);
		});
	});

	return returnArr;
}
*/

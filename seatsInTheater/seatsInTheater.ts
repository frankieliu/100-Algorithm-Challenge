const seatsInTheater = (nCols: number, nRows: number, col: number, row: number): number => {
	const bottomSeats = nCols * row;
	const backRightSeats = (nRows - row) * (col - 1);
	const totalSeats = nCols * nRows;

	return totalSeats - bottomSeats - backRightSeats;
}

console.log(seatsInTheater(16, 11, 5, 3));
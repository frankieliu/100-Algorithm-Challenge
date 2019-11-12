const houseNumbersSum = (inputArray: number[]): number => {
	let houseTotal = 0;
	
	inputArray.some(number => {
		houseTotal += number;
		return number === 0;
	});

	return houseTotal;
}

console.log(houseNumbersSum([5, 1, 2, 3, 0, 1, 5, 0, 2]));
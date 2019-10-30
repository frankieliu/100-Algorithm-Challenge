const arrayChange = (inputArray: number[]): number => {
	let counter = 0;
	inputArray.forEach((val, idx) => {
		if (inputArray[idx+1] <= val) {
			do {
				counter++;
				inputArray[idx+1]++;
			} while (inputArray[idx+1] <= val)
		}
	});

	return counter
}

console.log(arrayChange([1, 1, 1]));
console.log(arrayChange([1,2,3]));
console.log(arrayChange([-1,-2,3]));
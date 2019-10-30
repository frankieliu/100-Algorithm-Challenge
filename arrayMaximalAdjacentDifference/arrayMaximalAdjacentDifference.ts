const arrayMaximalAdjacentDifference = (inputArray: number[]): number => {
	let maxDifference = 0;

	for (let i = 1; i < inputArray.length - 1; i++) {
		const lowerVal = inputArray[i-1];
		const middleVal = inputArray[i];
		const upperVal = inputArray[i+1];

		const absLowerDifference = Math.abs(middleVal - lowerVal);
		if (absLowerDifference > maxDifference) {
			maxDifference = absLowerDifference;
		}

		const absUpperDifference = Math.abs(upperVal - middleVal);
		if (absUpperDifference > maxDifference) {
			maxDifference = absUpperDifference;
		}
	}

	return maxDifference;
}

console.log(arrayMaximalAdjacentDifference([2, 4, 1, 0]));
console.log(arrayMaximalAdjacentDifference([2, 4, 9, 0]));
console.log(arrayMaximalAdjacentDifference([2, 4, -1, 0]));
console.log(arrayMaximalAdjacentDifference([2, 4, 1, 100]));
console.log(arrayMaximalAdjacentDifference([100, 4, 1, 0]));
const arrayMaxConsecutiveSum = (inputArray: number[], k: number): number => {
	let maxSum = 0;

	for (let i = 0; i < inputArray.length; i++) {
		let currentSum = 0;
		for (let j = 0; j < k; j++) {
			currentSum += inputArray[i+j];
		}

		if (currentSum > maxSum) {
			maxSum = currentSum;
		}
	}

	return maxSum;
}

console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 2));
console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 3));
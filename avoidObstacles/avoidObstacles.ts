const avoidObstacles = (inputArray: number[]): number => {
	for (let i = 1; i < inputArray.length; i++) {
		if (inputArray.every(val => val % i !== 0)) {
			return i;
		}
	}
}

console.log(avoidObstacles([5, 3, 6, 7, 9]));
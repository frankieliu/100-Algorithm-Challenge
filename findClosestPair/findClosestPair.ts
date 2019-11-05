const findClosestPair = (numbers: number[], sum: number): number => {
	let pairDistance = -1;

	numbers.forEach((val, idx) => {
		for (let i = 0; i < numbers.length; i += 1) {
			if (i !== idx && (val + numbers[i] === sum)) {
				const currentDistance = Math.abs(Math.abs(i) - Math.abs(idx));
				if (pairDistance === -1 || currentDistance < pairDistance) {
					pairDistance = currentDistance;
				}
			}
		}
	});

	return pairDistance;
}

console.log(findClosestPair([1, 0, 2, 4, 3, 0], 5));
console.log(findClosestPair([2, 3, 7], 8));
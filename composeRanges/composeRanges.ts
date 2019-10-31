const shouldAddToRange = (n1, n2) => {
	if ((n2 - n1) === 1) {
		return true;
	}

	return false;
}

const composeRanges = (nums: number[]): string[] => {
	const returnRanges = [];
	let rangeStart = nums[0];

	nums.forEach((num, idx) => {
		if (!shouldAddToRange(num, nums[idx+1])) {
			if (num !== rangeStart) {
				returnRanges.push(rangeStart.toString() + "->" + num.toString());
			} else {
				returnRanges.push(num.toString());
			}
				
			rangeStart = nums[idx+1];
		}
	});

	return returnRanges;
}


console.log(composeRanges([-1, 0, 1, 2, 6, 7, 9]));
console.log(composeRanges([-1, 0, 1, 2, 6, 7, 9, 10]));
console.log(composeRanges([-1, 0, 1, 2, 6, 7, 9, 10, 11]));
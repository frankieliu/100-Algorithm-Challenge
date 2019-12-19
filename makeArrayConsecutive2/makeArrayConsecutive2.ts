const makeArrayConsecutive2 = (statues: number[]): number => {
	const sortedArr = statues.sort();
	let additionalStatues = 0;

	sortedArr.forEach((num, idx) => {
		if (idx !== sortedArr.length - 1) {
			const diff = sortedArr[idx+1] - num - 1;
			additionalStatues += diff;
		}
	});

	return additionalStatues;
}

console.log(makeArrayConsecutive2([6, 2, 3, 8]));
console.log(makeArrayConsecutive2([1,2,3]));
console.log(makeArrayConsecutive2([5,4,2,3,6,8]));
console.log(makeArrayConsecutive2([1,20]));
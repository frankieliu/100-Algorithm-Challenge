const arrayPreviousLess = (items: number[]): number[] => {
	const returnArray = [];
	for (let i = 0; i < items.length; i++) {
		for (let j = i; j >= 0; j--) {
			if (j === 0) {
				returnArray.push(-1);
				break;
			}

			if (items[j-1] < items[i]) {
				returnArray.push(items[j-1]);
				break;
			}
		}
	}

	return returnArray;
}

console.log(arrayPreviousLess([3, 5, 2, 4, 5]));
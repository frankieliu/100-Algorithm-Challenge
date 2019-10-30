const combineValues = (iterationCount, val1, val2) => {
	if (iterationCount % 2 === 0) {
		return val1 * val2;
	}

	return val1 + val2;
}

const arrayConversion = (inputArray: number[]): number => {
	let returnArray = inputArray;
	let iterationCount = 1;
	do {
		const replacementArray = [];
		for(let i = 0; i < returnArray.length; i += 2) {
			replacementArray.push(combineValues(iterationCount, returnArray[i], returnArray[i+1]));
		}
		returnArray = replacementArray;
		iterationCount++;
	} while (returnArray.length !== 1);

	return returnArray[0];
}

console.log(arrayConversion([1, 2, 3, 4, 5, 6, 7, 8]));

const arrayReplace = (inputArray: number[], elemToReplace: number, substitutionElem: number): number[] => {
	const returnArray = inputArray;
	returnArray.forEach((val, idx) => {
		if (val === elemToReplace) {
			returnArray[idx] = substitutionElem;
		}
	});

	return returnArray;
}

console.log(arrayReplace([1, 2, 1], 1, 3));
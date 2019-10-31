const chunkyMonkey = (arr: any[], size: number): any[][] => {
	const returnArray = [];
	let sliceStart = 0;

	do {
		returnArray.push(arr.slice(sliceStart, sliceStart + size));
		sliceStart += size;
	} while (sliceStart < arr.length);

	return returnArray;
}

console.log(chunkyMonkey(["a", "b", "c", "d"], 2));
console.log(chunkyMonkey([0, 1, 2, 3, 4, 5], 4));
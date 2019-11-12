const flattenArray = (arr: any[]): any[] => {
	let returnArray = [].concat.apply([], arr);
	while (returnArray.some(item => Array.isArray(item))) {
		returnArray = [].concat.apply([], returnArray);
	}

	return returnArray;
}

console.log(flattenArray([[["a"]], [["b"]]]));
console.log(flattenArray([1, [2], [3, [[4]]]]));

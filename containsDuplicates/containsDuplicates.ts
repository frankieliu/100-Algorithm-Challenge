const containsDuplicates = (a: number[]): boolean => {
	return a.some((val, idx) => a.slice(idx + 1).indexOf(val) > -1);
}

console.log(containsDuplicates([1, 2, 3, 1]));
console.log(containsDuplicates([3, 1]));

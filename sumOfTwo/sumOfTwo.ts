const sumOfTwo = (a: number[], b: number[], v: number): boolean => {
	return a.some(aNum => b.includes(v-aNum));
}

console.log(sumOfTwo([1, 2, 3], [10, 20, 30, 40], 42));
console.log(sumOfTwo([1, 2, 3], [10, 20, 30, 40], 43));
console.log(sumOfTwo([1, 2, 3], [10, 20, 30, 40], 44));
console.log(sumOfTwo([50], [31], 81));
const candies = (n: number, m: number): number => {
	const remainder = m % n;
	const totalCandies = m - remainder
	return totalCandies;
}

console.log(candies(3, 10));
console.log(candies(4, 12));
console.log(candies(4, 16));
console.log(candies(5, 10));
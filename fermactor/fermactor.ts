const fermactor = (n: number): number[] => {
	const a = Math.ceil(Math.sqrt(n));
	const b2 = a*a - n;
	const b = Math.floor(Math.sqrt(b2));

	return [a, b];
}

console.log(fermactor(15));
console.log(fermactor(21));
console.log(fermactor(5959)); // Incorrect
console.log(78**2 - 11**2)
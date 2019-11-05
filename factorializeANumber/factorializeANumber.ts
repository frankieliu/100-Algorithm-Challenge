const factorializeANumber = (num: number): number => {
	let factorialProduct = num;

	for (let i = num - 1; i > 0; i--) {
		factorialProduct *= i;
	}

	return factorialProduct;
}

console.log(factorializeANumber(5));
console.log(factorializeANumber(10));
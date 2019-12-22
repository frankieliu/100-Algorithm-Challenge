const calcProduct = x => x.toString().split('').reduce((product, cur) => product * parseInt(cur), 1);

const uniqueDigitProducts = (a: number[]): number => {
	const products = a.map(num => calcProduct(num));
	return new Set(products).size;
}

console.log(uniqueDigitProducts([2, 8, 121, 42, 222, 23]));
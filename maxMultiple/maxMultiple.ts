const maxMultiple = (divisor: number, bound: number): number =>  {
	const quotient = bound / divisor;
	return Math.floor(quotient) * divisor;
}

console.log(maxMultiple(3,10));
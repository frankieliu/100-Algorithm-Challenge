const characterParity = (symbol: string): string => {
	const number = parseInt(symbol);
	if (isNaN(number)) {
		return "not a digit";
	}

	if (number % 2 === 0) {
		return "even";
	}

	return "odd";
}

console.log(characterParity('5'))
console.log(characterParity('8'))
console.log(characterParity('q'))

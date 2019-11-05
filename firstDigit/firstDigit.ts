const firstDigit = (inputString: string): string => {
	const splitString = inputString.split('');
	let returnDigit;

	splitString.forEach(val => {
		if (typeof returnDigit === 'undefined' && !isNaN(parseInt(val))) {
			returnDigit = val;
		}
	});

	return returnDigit;
}

console.log(firstDigit('var_1__Int'));
console.log(firstDigit('q2q-q'));
console.log(firstDigit('0ss'));

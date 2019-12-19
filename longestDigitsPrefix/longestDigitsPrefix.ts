const longestDigitsPrefix = (inputString: string): string => {
	const inputArr = inputString.split('');
	const returnArr = [];

	inputArr.every(char => {
		if (isNaN(parseInt(char))) {
			return false;
		}

		returnArr.push(char);
		return true;
	});

	return returnArr.join('');
}

console.log(longestDigitsPrefix('123aa1'));
console.log(longestDigitsPrefix('12345345aa1'));
console.log(longestDigitsPrefix('12a3aa1'));
const encloseInBrackets = (inputString: string): string => {
	const inputArray = inputString.split('');
	inputArray.unshift('(');
	inputArray.push(')');

	let returnString = '';
	inputArray.forEach(char => returnString = returnString.concat(char));

	return returnString;
}

console.log(encloseInBrackets('abacaba'));
console.log(encloseInBrackets('trey'));
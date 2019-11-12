const integerToStringOfFixedWidth = (number: number, width: number): string => {
	const strNumber = number.toString();
	if (strNumber.length > width) {
		return strNumber.substring(strNumber.length - width);
	} else if (strNumber.length < width) {
		return ('0'.repeat(width - strNumber.length)).concat(strNumber)
	} else {
		return strNumber;
	}
}

console.log(integerToStringOfFixedWidth(1234, 2));
console.log(integerToStringOfFixedWidth(1234, 4));
console.log(integerToStringOfFixedWidth(1234, 7));

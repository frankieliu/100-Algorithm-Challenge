const areArraysEqual = (arr1, arr2) => {
	return arr1.every((val, idx) => val === arr2[idx]);
};


const checkPalindrome = (inputString: string): boolean => {
	const splitString = inputString.split('');
	const frontHalf = [];
	const backHalf = [];

	for (let i = 0; i < Math.floor(inputString.length / 2); i++) {
		frontHalf.push(splitString[i]);
	}
	for (let j = inputString.length-1; j >= inputString.length / 2; j--) {
		backHalf.push(splitString[j]);
	}

	return areArraysEqual(frontHalf, backHalf);
}

console.log(checkPalindrome('aabaa'));
console.log(checkPalindrome('abac'));
console.log(checkPalindrome('a'));

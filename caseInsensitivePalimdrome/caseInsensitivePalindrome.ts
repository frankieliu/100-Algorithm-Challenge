const arraysAreEqual = (arr1, arr2) => {
	return arr1.every((val, idx) => val === arr2[idx]);
};

const isCaseInsensitivePalindrome = (inputString: string): boolean => {
	const splitString = inputString.split('');
	const frontHalf = [];
	const backHalf = [];

	for (let i = 0; i < Math.floor(inputString.length / 2); i++) {
		frontHalf.push(splitString[i].toLowerCase());
	}
	for (let j = inputString.length-1; j >= inputString.length / 2; j--) {
		backHalf.push(splitString[j].toLowerCase());
	}

	return arraysAreEqual(frontHalf, backHalf);
}

console.log(isCaseInsensitivePalindrome('AaBaa'));
console.log(isCaseInsensitivePalindrome('abac'));
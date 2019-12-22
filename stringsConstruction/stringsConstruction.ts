const getLetterCount = str => {
	const letterCounts = {};

	str.split('').forEach(char => {
		if (letterCounts.hasOwnProperty(char)) {
			letterCounts[char] += 1;
		} else {
			letterCounts[char] = 1;
		}
	});

	return letterCounts;
};

const missingChars = (a, b) => {
	return a.split('').some(char => b.indexOf(char) === -1);
};

const stringsConstruction = (a: string, b: string): number => {
	const aCounts = getLetterCount(a);
	const bCounts = getLetterCount(b);

	if (missingChars(a, b)) {
		return 0;
	}
	
	Object.keys(aCounts).forEach(key => {
		bCounts[key] = Math.floor(bCounts[key] / aCounts[key]);
	});

	return Object.values(bCounts).sort((a, b) => a - b)[0];
};

console.log(stringsConstruction('abc', 'abccba'));
console.log(stringsConstruction('meet', 'meetteem'));
console.log(stringsConstruction('trey', 'tryaaaa'));
console.log(stringsConstruction('aaaaaaatry', 'tryaaaaaaa'));
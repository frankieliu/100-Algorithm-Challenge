const palindromeRearranging = (inputString: string): boolean => {
	const letterCounts = {};

	inputString.split('').forEach(letter => {
		if (letterCounts.hasOwnProperty(letter)) {
			letterCounts[letter] += 1;
		} else {
			letterCounts[letter] = 1;
		}
	});

	let oddCount = 0;

	Object.keys(letterCounts).forEach(key => {
		if (oddCount <= 1) {
			if (letterCounts[key] % 2 !== 0) {
				oddCount += 1;
			}
		}
	});

	return oddCount <= 1;
}

console.log(palindromeRearranging('aabb'));
console.log(palindromeRearranging('racecar'));
console.log(palindromeRearranging('trey'));
console.log(palindromeRearranging('mooomoooaaa'));
const missingLetters = (str: string): string => {
	const alphabet = 'abcdefghijklmnopqrstuvwxyz';
	const arrAlpha = alphabet.split('');
	const arrTest = str.split('');
	let returnLetter;

	arrTest.some((char, idx) => {
		const letterIdx = arrAlpha.indexOf(char);

		if ((idx === 0) && (letterIdx > idx)) {
			returnLetter = arrAlpha[letterIdx - 1];
			return true;
		}

		if ((letterIdx !== idx)
			|| (((arrTest.length - 1) === idx) && (idx < 25))) {
				returnLetter = arrAlpha[idx];
				return true;
			}
	});

	return returnLetter;
};

console.log(missingLetters("bce"));
console.log(missingLetters("abce"));
console.log(missingLetters("abcdefghjklmno"));
console.log(missingLetters("abcdefghijklmnopqrstuvwxyz"));
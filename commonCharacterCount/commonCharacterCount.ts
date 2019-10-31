const commonCharacterCount = (s1: string, s2: string): number => {
	const splitS1 = s1.split('');
	const splitS2 = s2.split('');
	let commonCount = 0;

	splitS1.forEach(character => {
		const indexOfChar = splitS2.indexOf(character);

		if (indexOfChar > -1) {
			commonCount += 1;
			splitS2.splice(indexOfChar, 1);
		}
	})

	return commonCount;
}

console.log(commonCharacterCount('aabcc', 'adcaa'));
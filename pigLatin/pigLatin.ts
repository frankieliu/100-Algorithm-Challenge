const pigLatin = (str: string): string => {
	const vowels = 'aeiou';
	let vowelHit = false;
	const endArr = [];
	const startArr = [];

	str.split('').forEach(char => {
		if (!vowelHit && vowels.includes(char)) {
			vowelHit = true;
		}

		if (vowelHit) {
			startArr.push(char);
		} else {
			endArr.push(char);
		}
	});

	console.log(startArr)
	if (endArr.length === 0) {
		return startArr.join('') + 'way';
	} else {
		return startArr.join('') + endArr.join('') + 'ay';
	}
}

console.log(pigLatin("glove"));
console.log(pigLatin("eight"));

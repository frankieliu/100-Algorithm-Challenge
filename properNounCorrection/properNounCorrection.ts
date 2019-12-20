const properNounCorrection = (noun: string): string => {
	const arrNoun = noun.split('');
	const arrProperNoun = arrNoun.map((char, idx) => idx > 0 ? char.toLowerCase() : char.toUpperCase());
	return arrProperNoun.join('');
}

console.log(properNounCorrection('pARiS'));
console.log(properNounCorrection('John'));
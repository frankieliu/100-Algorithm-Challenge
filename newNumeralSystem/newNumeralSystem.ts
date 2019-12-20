const newNumeralSystem = (number: string): string[] => {
	const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
	const upperBound = alphabet.indexOf(number);
	const numberPairs = [];

	for (let i = 0; i <= Math.floor(upperBound/2); i += 1) {
		numberPairs.push([alphabet[i], alphabet[upperBound-i]]);
	}

	return numberPairs.map(pair => pair[0] + " + " + pair[1]);
}   

console.log(newNumeralSystem('G'));
const firstNotRepeatingCharacter = (s: string): string => {
	let returnChar = '_';
	s.split('').forEach(char => {
		if (returnChar === '_' && s.indexOf(char) === s.lastIndexOf(char)) {
			returnChar = char;
		}
	});

	return returnChar;
}

console.log(firstNotRepeatingCharacter('abacabad'));
console.log(firstNotRepeatingCharacter('abacabaabacaba'));

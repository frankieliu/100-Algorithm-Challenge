const alphabet = 'abcdefghijklmnopqrstuvwxyz';

const stolenLunch = (note: string): string => {
	const colonIndex = note.indexOf(':');

	return note.split('').map((char, idx) => {
		if (char === ' ') {
			return char;
		}

		if (idx < colonIndex) {
			if (!isNaN(char)) {
				return alphabet.charAt(parseInt(char));
			}
		} else if (idx > colonIndex) {
			if (isNaN(char)) {
				return alphabet.indexOf(char).toString();
			}
		}

		return char;
	}).join('');
}

console.log(stolenLunch("you'll n4v4r 6u4ss 8t: cdja"));
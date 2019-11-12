const htmlEndTagByStartTag = (startTag: string): string => {
	let returnString = "</";
	startTag.split('').some((char, idx) => {
		if (idx > 0) {
			if (char === ' ' || char === '>') {
				return true;
			}

			returnString = returnString.concat(char);
			return false;
		}
		return false;
	});

	return returnString.concat('>');
}

console.log(htmlEndTagByStartTag("<button type='button' disabled>"));
console.log(htmlEndTagByStartTag('<i>'))
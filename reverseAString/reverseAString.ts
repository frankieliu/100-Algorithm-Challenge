const reverseAString = (str: string): string => {
	const revWord = [];
	str.split('').forEach(char => revWord.unshift(char));
	return revWord.join('');
}

console.log(reverseAString('hello'));
console.log(reverseAString('Howdy'));
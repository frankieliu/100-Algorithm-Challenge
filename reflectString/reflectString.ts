const reflectString = (inputString: string): string => {
	const arrAlpha = 'abcdefghijklmnopqrstuvwxyz'.split('');

	return inputString.split('').map(char => 
		arrAlpha[arrAlpha.length - 1 - arrAlpha.indexOf(char)]).join('');
}

console.log(reflectString("name"));

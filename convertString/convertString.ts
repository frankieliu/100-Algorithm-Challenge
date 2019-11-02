const convertString = (s: string, t: string): boolean => {
	let sTest = s;
	let returnVal;

	t.split('').forEach((char, idx) => {
		const indexOfChar = sTest.indexOf(char);
		
		if (returnVal !== false && indexOfChar > -1) {
			sTest = sTest.slice(indexOfChar);

			if (idx === t.length - 1) {
				returnVal = true;
			}
		} else {
			returnVal = false;
		}
	});

	return returnVal;
}

console.log(convertString('ceoydefthf5iyg5h5yts', 'codefights'));
console.log(convertString('addbyca', 'abcd'));

const differentSymbolsNaive = (s: string): number => {
	const distinctChars = [];
	s.split('').forEach(char => {
		if (!distinctChars.includes(char)) {
			distinctChars.push(char);
		}
	});

	return distinctChars.length;
}

console.log(differentSymbolsNaive('cabca'));

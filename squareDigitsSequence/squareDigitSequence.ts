const squareDigitsSequence = (a0: number): number => {
	let i = 1;
	let current = a0;
	const results = [current];

	do {
		results.push(current);
		current = current.toString().split('').reduce((sum, cur) =>
			sum + parseInt(cur) ** 2, 0);
		i += 1;
	} while (i === 0 || !results.includes(current));

	return i;
}


console.log(squareDigitsSequence(16));
console.log(squareDigitsSequence(103));
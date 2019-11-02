const digitDegree = (n: number): number => {
	let degreeCount = 0;
	let nString = n.toString();

	if (nString.length === 1) {
		return 0;
	}

	do {
		degreeCount += 1;
		const nSplit = nString.split('');
		const newSum = nSplit.reduce((acc, cur) => acc + parseInt(cur), 0);
		nString = newSum.toString();
	} while (nString.length > 1);

	return degreeCount;
}

console.log(digitDegree(5));
console.log(digitDegree(10));
console.log(digitDegree(91));
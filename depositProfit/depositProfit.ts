const depositProfit = (deposit: number, rate: number, threshold: number): number => {
	let yearCount = 0;
	let currentAmount = deposit;

	do {
		currentAmount += currentAmount * (rate / 100);
		yearCount++;
	} while (currentAmount < threshold);

	return yearCount;
}

console.log(depositProfit(100, 20, 170))
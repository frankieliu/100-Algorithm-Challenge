const minimalNumberOfCoins = (coins: number[], price: number): number => {
	let coinsCount = 0;
	let amountRemaining = price;

	coins.reverse().forEach(coin => {
		if (amountRemaining > 0) {
			if (coin >= amountRemaining) {
				coinsCount += 1;
				amountRemaining -= coin;
			} else {
				const useableCoins = Math.floor(amountRemaining / coin);
				coinsCount += useableCoins;
				amountRemaining -= (useableCoins * coin);
			}
		}
	});

	return coinsCount;
}

console.log(minimalNumberOfCoins([1, 2, 10], 28));
console.log(minimalNumberOfCoins([4, 12, 24], 44));
console.log(minimalNumberOfCoins([4, 12, 24], 24));
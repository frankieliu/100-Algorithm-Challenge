const companyBotStrategy = (trainingData: number[][]): number => {
	let totalTime = 0;
	let totalCorrect = 0;

	trainingData.forEach(results => {
		if (results[1] === 1) {
			totalCorrect += 1;
			totalTime += results[0];
		}
	});

	if (totalCorrect === 0) {
		return 0;
	}

	return totalTime / totalCorrect;
}

console.log(companyBotStrategy([[3, 1], [6, 1], [4, 1], [5, 1]]));
console.log(companyBotStrategy([[4, 1], [4, -1], [0, 0], [6, 1]]));
console.log(companyBotStrategy( [[4, -1], [0, 0], [5, -1]]));

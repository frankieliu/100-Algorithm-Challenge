const findNumSums = (num, arr, reduceByArr) => {
	if (num <= 0) {
		return reduceByArr;
	}

	const reduceBy = num.toString().split('').reduce((sum, cur) => parseInt(sum) + parseInt(cur), 0);
	const nextNum = num - reduceBy;
	reduceByArr.push(reduceBy);
	arr.push(nextNum);
	
	return findNumSums(nextNum, arr, reduceByArr);
}

const mostFrequentDigitSum = (n: number): number => {
	const sums = findNumSums(n , [], []);
	const sumCounts = {};

	sums.forEach(sum => {
		if (sumCounts[sum]) {
			sumCounts[sum] += 1;
		} else {
			sumCounts[sum] = 1;
		}
	});

	console.log(Object.keys(sumCounts));
	const frequentNum = Object.keys(sumCounts).reduce((highestKey, curKey) => {
		if (!highestKey) {
			return curKey;
		}

		if (sumCounts[curKey] === sumCounts[highestKey]) {
			if (curKey > highestKey) {
				return curKey;
			} else {
				return highestKey;
			}
		}

		if (sumCounts[curKey] > sumCounts[highestKey]) {
			return curKey;
		} else {
			return highestKey;
		}
	});

	return parseInt(frequentNum);
}

console.log(mostFrequentDigitSum(88));
console.log(mostFrequentDigitSum(8));
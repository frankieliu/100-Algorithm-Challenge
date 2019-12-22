const getFibNums = n => {
	const nums = [1, 1];
	let nextNum = 2;

	while (nextNum < n) {
		nextNum = nums[nums.length - 1] + nums[nums.length - 2];

		if (nextNum < n)
			nums.push(nextNum);
	}

	return nums;
};

const sumOddFibonacciNums = (num: number): number => {
	const fibNums = getFibNums(num);
	return fibNums.reduce((sum, cur) => cur % 2 !== 0 ? sum + cur : sum, 0);
};

console.log(sumOddFibonacciNums(1000));
console.log(sumOddFibonacciNums(4000000));
console.log(sumOddFibonacciNums(10));
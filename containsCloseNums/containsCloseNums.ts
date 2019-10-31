const containsCloseNums = (nums: number[], k: number): boolean => {
	let containsClose = false;
	nums.forEach((num, idx) => {
		for (let i = idx + 1; i < nums.length; i += 1) {
			if (num === nums[i] && Math.abs(idx - i) <= k) {
				containsClose = true;
			}
		}
	});

	return containsClose;
}

console.log(containsCloseNums([0, 1, 2, 3, 5, 2], 3));
console.log(containsCloseNums([0, 1, 2, 3, 5, 2], 2));
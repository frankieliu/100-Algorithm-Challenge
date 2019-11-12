const isLucky = (n: number): boolean => {
	const strN = n.toString();
	const midway = strN.length/2;
	const firstHalf = strN.substring(0, midway);
	const secondHalf = strN.substring(midway);
	const firstSum = firstHalf.split('').reduce((acc, cur) => acc + parseInt(cur), 0);
	const secondSum = secondHalf.split('').reduce((acc, cur) => acc + parseInt(cur), 0);

	return firstSum === secondSum;
}

console.log(isLucky(1230));
console.log(isLucky(239017));
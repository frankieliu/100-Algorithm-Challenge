const sortByHeight = (a: number[]): number[] => {
	if (!a || a.length === 0) {
		return null;
	}

	if (a.length === 1) {
		return a;
	}

	const treeIndices = [];

	a.forEach((num, idx) => {
		if (num === -1) {
			treeIndices.push(idx);
		}
	});

	const heightsOnly = a.filter(num => num >= 0);
	const sortedHeights = heightsOnly.sort((a, b) => a - b);

	let sortedWithTrees = sortedHeights;

	treeIndices.forEach(index => {
		sortedWithTrees.splice(index, 0, -1);
	});

	return sortedWithTrees;
}

console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]));
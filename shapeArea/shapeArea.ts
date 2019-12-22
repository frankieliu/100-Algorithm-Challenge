const shapeArea = (n: number): number => {
	if (n && n > 0) {
		let current = 1;

		for (let i = 1; i <= n; i += 1) {
			current += ((i - 1) * 4);
		}

		return current;
	} else {
		return null;
	}
}

console.log(shapeArea(2));
console.log(shapeArea(3));
const houseOfCats = (legs: number): number[] => {
	const humanOptions = [];
	for (let i = 0; i <= legs/4; i++) {
		humanOptions.unshift((legs - i*4)/2);
	}

	return humanOptions;
}

console.log(houseOfCats(6));
console.log(houseOfCats(2));
console.log(houseOfCats(12));

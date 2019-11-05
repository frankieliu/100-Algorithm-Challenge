const firstDuplicate = (a: number[]): number => {
	let number = -1;
	let secondIndex = a.length;

	a.forEach((num, idx) => {
		const nextIndex = a.indexOf(num, idx+1);
		if (nextIndex > -1 && nextIndex < secondIndex) {
			number = num;
		}
	});

	return number;
}

console.log(firstDuplicate([2, 1, 3, 5, 3, 2]));
console.log(firstDuplicate([2, 4, 3, 5, 1]));

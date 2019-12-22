const tasksTypes = (deadlines: number[], day: number): number[] => {
	const typeTallies = [0, 0, 0];

	deadlines.forEach(date => {
		if (date - day <= 0) {
			typeTallies[0] += 1;
		} else if (date - day <= 7) {
			typeTallies[1] += 1;
		} else {
			typeTallies[2] += 1;
		}
	});

	return typeTallies;
}

console.log(tasksTypes([1, 2, 3, 4, 5], 2));
console.log(tasksTypes([1, 2, 4, 2, 10, 3, 1, 4, 5, 4, 9, 8], 1));

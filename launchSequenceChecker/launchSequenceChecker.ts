const launchSequenceChecker = (systemNames: string[], stepNumbers: number[]): boolean => {
	const keyedSystemIndexes = {};

	systemNames.forEach((name, idx) => {
		if (!keyedSystemIndexes.hasOwnProperty(name)) {
			keyedSystemIndexes[name] = [idx];
		} else {
			keyedSystemIndexes[name].push(idx);
		}
	});

	console.log(keyedSystemIndexes);
	return Object.keys(keyedSystemIndexes).every(systemName => {
		return keyedSystemIndexes[systemName]
			.reduce((valid, stepIdx, arrIdx, arr) => {
				if (!valid) { return false };

				if (stepNumbers[arr[arrIdx+1]] && stepNumbers[stepIdx]) {
					return stepNumbers[stepIdx] < stepNumbers[arr[arrIdx+1]];
				} else {
					return true;
				}
			}, true);
	});
}

console.log(launchSequenceChecker(["stage_1", "stage_2", "dragon", "stage_1", "stage_2", "dragon"], [1, 10, 11, 2, 12, 111]));
console.log(launchSequenceChecker(["stage_1", "stage_1", "stage_2", "dragon"], [2, 1, 12, 111]));
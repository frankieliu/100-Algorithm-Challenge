const proCategorization = (pros: string[], preferences: string[][]): string[][][] => {
	const prefMap = {};

	for (let i = 0; i < pros.length; i += 1) {
		preferences[i].forEach(pref => {
			if (prefMap.hasOwnProperty(pref)) {
				prefMap[pref].push(pros[i]);
			} else {
				prefMap[pref] = [pros[i]];
			}
		});
	}

	return Object.entries(prefMap);
}

console.log(proCategorization(["Jack", "Leon", "Maria"], [["Computer repair", "Handyman", "House cleaning"],
["Computer lessons", "Computer repair", "Data recovery service"],
["Computer lessons", "House cleaning"]]));
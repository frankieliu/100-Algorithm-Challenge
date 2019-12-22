const flipLight = val => val === 0 ? 1 : 0;

const switchLights = (a: number[]): number[] => {
	const newLights = a;

	newLights.forEach((light, idx) => {
		if (light === 1) {
			for (let i = idx; i >= 0; i -= 1) {
				newLights[i] = flipLight(newLights[i]);
			}
		}
	});

	return newLights;
};

/*
const switchLights = (a: number[]): number[] => {
	const lightsCount = a.length;
	return a.map((light, idx) => (lightsCount + idx) % 2 === 0 ? light : flipLight(light)); 
};
*/

console.log(switchLights([1, 1, 1, 1, 1]));
console.log(switchLights([0, 0]));
console.log(switchLights([0, 0, 1, 0, 1, 1]));
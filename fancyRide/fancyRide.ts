const fancyRide = (l: number, fares: number[]): string => {
	const uberTypes = ["UberX", "UberXL", "UberPlus", "UberBlack", "UberSUV"];
	let uberChoice = "None";

	fares.forEach((price, idx) => {
		if ((l * price) < 20) {
			uberChoice = uberTypes[idx];
		}
	});

	return uberChoice;
}

console.log(fancyRide(30, [0.3, 0.5, 0.7, 1, 1.3]));
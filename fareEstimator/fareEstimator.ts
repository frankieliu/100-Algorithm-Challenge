const fareEstimator = (ride_time: number, ride_distance: number, cost_per_minute: number[], cost_per_mile: number[]): number[] => {
	const fareEstimates = [];

	cost_per_minute.forEach((costPerMin, idx) => fareEstimates.push(
		parseFloat((costPerMin * ride_time + cost_per_mile[idx] * ride_distance).toFixed(1))
	));

	return fareEstimates;
}

console.log(fareEstimator(30, 7, [0.2, 0.35, 0.4, 0.45], [1.1, 1.8, 2.3, 3.5]));

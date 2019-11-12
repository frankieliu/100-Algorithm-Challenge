const growingPlant = (upSpeed: number, downSpeed: number, desiredHeight: number): number => {
	const dailyGrowth = upSpeed - downSpeed;
	return Math.floor(desiredHeight / dailyGrowth);
}

console.log(growingPlant(100, 10, 910))
const validTime = (time: string): boolean => {
	const timeHalves = time.split(':');
	return parseInt(timeHalves[0]) <= 24 && parseInt(timeHalves[1]) < 60;
}

console.log(validTime('13:58'));
console.log(validTime('25:51'));
console.log(validTime('02:76'));
console.log(validTime('02:60'));
console.log(validTime('24:06'));
console.log(validTime('12:59'));
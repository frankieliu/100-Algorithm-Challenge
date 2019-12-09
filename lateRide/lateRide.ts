const lateRide = (n: number): number => {
	const hours = n / 60;
	const minutes = n % 60;

	const arrHours = hours.toFixed().toString().split('');
	const arrMinutes = minutes.toFixed().toString().split('');

	const arrTime = arrHours.concat(arrMinutes);
	console.log(arrTime);
	return arrTime.reduce((total, cur) => parseInt(cur) + total, 0);
}

console.log(lateRide(240));
console.log(lateRide(808));

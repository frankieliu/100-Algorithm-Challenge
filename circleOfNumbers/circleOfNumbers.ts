const circleOfNumbers = (n: number, firstNumber: number): number => {
	return (firstNumber + n / 2) % n;
}

console.log(circleOfNumbers(10, 2));
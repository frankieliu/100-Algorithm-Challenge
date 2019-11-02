const evenDigitsOnly = (n: number): boolean => {
	return n.toString().split('').every(digit => parseInt(digit) % 2 === 0);
}

console.log(evenDigitsOnly(248622));
console.log(evenDigitsOnly(642386));
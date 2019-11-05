const findEmailDomain = (address: string): string => {
	const splitArray = address.split('@');
	return splitArray[splitArray.length-1];
}

console.log(findEmailDomain('prettyandsimple@example.com'));
console.log(findEmailDomain('<>[]:,;@\"!#$%&*+-/=?^_{}| ~.a\"@example.org'));

const confirmEnding = (str: string, target: string) => {
	const strEnd = str.substring(str.length - target.length);
	return strEnd === target;
}

console.log(confirmEnding("Abstraction", "action"));
console.log(confirmEnding("Open sesame", "pen"));
const incorrectPasscodeAttempts = (passcode: string, attempts: string[]): boolean => {
	let failedAttempts = 0;

	return attempts.some(code => {
		if (code === passcode) {
			failedAttempts = 0;
		} else {
			failedAttempts++;
		}

		return failedAttempts >= 10;
	})
}

console.log(incorrectPasscodeAttempts('1111', ["1111", "4444", "9999", "3333", "8888", "2222", "7777", "0000", "6666", "7285", "5555", "1111"]));
console.log(incorrectPasscodeAttempts('1111', ["1111", "4444", "9999", "3333", "1111", "2222", "7777", "0000", "6666", "7285", "5555", "1111"]));
console.log(incorrectPasscodeAttempts('1234', ["1111", "4444", "9999", "3333", "1234", "2222", "7777", "0000", "6666", "7285", "5555", "1111"]));
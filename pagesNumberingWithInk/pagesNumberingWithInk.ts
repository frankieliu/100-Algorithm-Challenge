const pagesNumberingWithInk = (current: number, numberOfDigits: number): number => {
	const printedPageNos = [];
	let currentPageNo = current;
	let remainingDigits = numberOfDigits;

	while (remainingDigits >= currentPageNo.toString().length) {
		printedPageNos.push(currentPageNo);
		remainingDigits -= currentPageNo.toString().length;
		currentPageNo += 1;
	}

	return printedPageNos[printedPageNos.length-1];
}

console.log(pagesNumberingWithInk(1, 5));
console.log(pagesNumberingWithInk(21, 5));
console.log(pagesNumberingWithInk(8, 4));
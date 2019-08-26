const allLongestStrings = (inputArray: string[]): string[] => {
    const maxStringLength = inputArray.reduce((acc, cur) => (acc > cur.length) ? acc : cur.length, 0);
    var longStrings = [];
    inputArray.forEach(str => {
        if (str.length === maxStringLength) {
            longStrings.push(str);
        }
    })

    return longStrings;
}

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));
console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "trey rocks"]));
console.log(allLongestStrings(["aba", "cool", "ad", "neat", "aba"]));
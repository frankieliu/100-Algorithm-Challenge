/*
const addTwoDigits = (n: any): number => {
    const firstDigit = n.toString()[0];
    const secondDigit = n.toString()[1];
    const sum = parseInt(firstDigit) + parseInt(secondDigit);

    return sum;
}
*/

const addTwoDigits = (n: any): number => {
    const arrNumbers = n.toString().split('');

    return arrNumbers.reduce((acc: string, cur: string) => parseInt(acc) + parseInt(cur));
}

console.log(addTwoDigits(29));
console.log(addTwoDigits(75));
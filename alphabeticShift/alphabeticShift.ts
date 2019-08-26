const alphabeticShift = (inputString: string): string => {
    const alphabet: string = 'abcdefghijklmnopqrstuvwxyz';
    const arrAlphabet = alphabet.split('');
    const arrInput = inputString.split('');
    var arrShifted = [];
    
    arrInput.forEach(letter => {
        const letterIndex = arrAlphabet.indexOf(letter);
        if (letterIndex === (arrAlphabet.length - 1)) {
            arrShifted.push(arrAlphabet[0]);
        }
        else {
            arrShifted.push(arrAlphabet[letterIndex + 1]);
        }
    })

    return arrShifted.join('');;
}

console.log(alphabeticShift('crazy'));
console.log(alphabeticShift('treywhite'));
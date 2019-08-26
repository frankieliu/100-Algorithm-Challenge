const alphabetSubsequence = (s: string): boolean => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const splitString = s.split('');

    const isSubsequence = splitString.reduce((acc, cur, idx) => {
        if (acc === true) {
            if (idx === 0) {
                return true;
            }
            else {
                const prevCharCode = alphabet.charCodeAt(alphabet.indexOf(splitString[idx - 1]))
                const newCharCode = alphabet.charCodeAt(alphabet.indexOf(cur));
                
                return newCharCode > prevCharCode;
            }
        }
        else {
            return false;
        }
    }, true)

    return isSubsequence;
}

console.log(alphabetSubsequence('abc'));
console.log(alphabetSubsequence('zab'));
console.log(alphabetSubsequence('effg'));
console.log(alphabetSubsequence('cdce'));
console.log(alphabetSubsequence('ace'));
console.log(alphabetSubsequence('bxz'));
console.log(alphabetSubsequence('bfghijpruv'));
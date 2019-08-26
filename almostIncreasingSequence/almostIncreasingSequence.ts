const almostIncreasingSequence = (sequence: number[]): boolean => {
    let isPossible: boolean = false;

    sequence.forEach((val, idx1) => {
        if (!isPossible) {
            var removedSequence = sequence.slice();
            removedSequence.splice(idx1, 1);
            
            isPossible = removedSequence.reduce((acc, cur, idx2) => {
                return ((acc === true) && (removedSequence[idx2 - 1])) ? (cur > removedSequence[idx2 - 1]) : acc;
            }, true);
        }
    })

    return isPossible;
}

console.log(almostIncreasingSequence([1, 3, 2, 1])) 
console.log(almostIncreasingSequence([1, 3, 2])) 
console.log(almostIncreasingSequence([5, 3, 4, 8, 9, 7]))
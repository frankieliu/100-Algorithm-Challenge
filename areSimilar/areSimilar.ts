const areSimilar = (a: number[], b: number[]): boolean => {
    var isSimilar = a.toString() === b.toString();

    if (isSimilar) {
        return true;
    }
    else {
        b.forEach((val, idx) => {
            if ((!isSimilar) && (idx !== b.length-1)) {
                const clonedB = b.slice();
                clonedB[idx] = b[idx+1];
                clonedB[idx+1] = b[idx];
                
                return isSimilar = (a.toString() === clonedB.toString());
            }
        })
    }
    return isSimilar;
}

console.log(areSimilar([1, 2, 3], [1, 2, 3]));
console.log(areSimilar([1, 2, 3], [2, 1, 3]));
console.log(areSimilar([1, 2, 2], [2, 1, 1]));
console.log(areSimilar([123, 456, 789], [123, 789, 456]));
console.log(areSimilar([1, 3, 56, 7, 123], [1, 3, 56, 123, 7]));
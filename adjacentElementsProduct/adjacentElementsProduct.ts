const adjacentElementsProduct = (inputArray: number[]): number => {
    let maxProduct: number = inputArray[0] * inputArray[1];

    inputArray.forEach((num, idx) => {
        const adjacentProduct: number = num * inputArray[idx + 1];
        
        if (adjacentProduct > maxProduct) {
            maxProduct = adjacentProduct;
        }
    })

    return maxProduct;
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));
console.log(adjacentElementsProduct([-3, 6, -2, 9, 5, -5, 7, -3]))
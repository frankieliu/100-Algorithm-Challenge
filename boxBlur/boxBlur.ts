const boxBlur = (image: number[][]): number[][] => {
    const pixelValues = [];
    let pixelCount = 0;
    
    image.forEach(array => {
        array.forEach(pixel => {
            pixelCount++;
            pixelValues.push(pixel);
        });
    })

    const sumPixels = pixelValues.reduce((acc, cur) => (acc + cur), 0);
    const averagePixel = Math.floor(sumPixels / pixelCount);
    const height = image.length - 2;
    const width = image[0].length - 2;


    const row = [];
    for (let i = 0; i < width; i++) {
        row.push(averagePixel);
    };
    const blurredImage = [];
    for (let j = 0; j < height; j++) {
        blurredImage.push(row);
    }
    return blurredImage;
}

console.log(boxBlur([
    [1, 1, 1], 
    [1, 7, 1], 
    [1, 1, 1]]));

console.log(boxBlur([
    [1, 1, 1, 1], 
    [1, 7, 1, 2], 
    [1, 1, 1, 3],
    [2, 3, 4, 5]]));

console.log(boxBlur([
    [1, 1, 1, 1], 
    [1, 7, 1, 2], 
    [1, 1, 1, 3],
    [2, 3, 4, 5],
    [5, 2, 3, 1]]));
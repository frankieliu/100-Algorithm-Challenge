const ratingThreshold = (threshold: number, ratings: number[][]): number[] => {
    const needingReview = [];

    ratings.forEach((userRatings, idx) => {
        const total = userRatings.reduce((sum, cur) => sum + cur, 0);
        const avg = total / userRatings.length;

        if (avg < threshold) {
            needingReview.push(idx);
        }
    });

    return needingReview;
}

console.log(ratingThreshold(3.5, 
    [[3, 4],
    [3, 3, 3, 4],
    [4]]));

console.log(ratingThreshold(3.5, 
    [[2, 3, 4],
    [3, 3, 3, 4],
    [4, 4]]));
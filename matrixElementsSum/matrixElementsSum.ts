const matrixElementsSum = (matrix: any[][]): number => {
    let sum = 0;
    const hauntedRooms = Array(matrix.length).fill(Array(matrix[0].length).fill(false));

    matrix.forEach((floor, floorIdx) => {
        floor.forEach((room, roomIdx) => {
            if (room === 0 && floorIdx < matrix.length - 1) {
                const nextFloor = floorIdx+1;
                hauntedRooms[nextFloor][roomIdx] = true;
            }

            if (!hauntedRooms[floorIdx][roomIdx]) {
                sum += room;
            }
        });
    });

    return sum;
}

console.log(matrixElementsSum(
    [[0, 1, 1, 2],
    [0, 5, 0, 0],
    [2, 0, 3, 3]]
));

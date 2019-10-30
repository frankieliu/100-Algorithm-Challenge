const numericalPositions = ["a", "b", "c", "d", "e", "f", "g", "h"];
const getNumericalCoords = alphanumericCoord => {
	const coordSplit = alphanumericCoord.slice();
	return [numericalPositions.indexOf(coordSplit[0])+1, parseInt(coordSplit[1])];
};

const getDistances = (coordA, coordB) => {
	return [0,1].map(index => {
		return Math.abs(coordA[index] - coordB[index]);
	});
};

const bishopAndPawn = (bishop: string, pawn: string): boolean => {
	const bishopCoords = getNumericalCoords(bishop);
	const pawnCoords = getNumericalCoords(pawn);

	const distances = getDistances(bishopCoords, pawnCoords);
	return distances[0] === distances[1];
}

console.log(bishopAndPawn('a1', 'c3'));
console.log(bishopAndPawn('a1', 'b3'));
console.log(bishopAndPawn('b7', 'g2'));
console.log(bishopAndPawn('f7', 'g6'));
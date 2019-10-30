const arrPositions = ["a", "b", "c", "d", "e", "f", "g", "h"];
const getNumberedCoords = alphanumericCoord => {
	const coordSplit = alphanumericCoord.slice();
	return [arrPositions.indexOf(coordSplit[0].toLowerCase())+1, parseInt(coordSplit[1])];
};

const getRemainders = cellPositions => {
	return [cellPositions[0] % 2, cellPositions[1] % 2];
};

const areSameColor = (cell1, cell2) => {
	return cell1.every((val, idx) => val === cell2[idx]);
};

const chessBoardCellColor = (cell1: string, cell2: string): boolean => {
	const c1Coords = getNumberedCoords(cell1);
	const c2Coords = getNumberedCoords(cell2);

	return areSameColor(getRemainders(c1Coords), getRemainders(c2Coords));
}

console.log(chessBoardCellColor('A1', 'C3'));
console.log(chessBoardCellColor('A1', 'H3'));

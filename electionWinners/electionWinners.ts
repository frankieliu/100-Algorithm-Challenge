const electionsWinners = (votes: number[], k: number): number => {
	const currentLeader = votes.reduce((acc, cur) => {
		if (acc > cur) {
			return acc;
		} else {
			return cur;
		}
	}, 0);
	
	let potentialWinnersCount = 0;
	votes.forEach(voteCount => {
		if ((voteCount + k) > currentLeader) {
			potentialWinnersCount += 1;
		}
	});

	return potentialWinnersCount;
}

console.log(electionsWinners([2, 3, 5, 2], 3));
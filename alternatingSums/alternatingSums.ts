const alternatingSums = (a: number[]): number[] => {
    var team1: number = 0;
    var team2: number = 0;

    a.forEach((val, idx) => {
        if (idx % 2) {
            team2 += val;
        }
        else {
            team1 += val;
        }
    })

    return [team1, team2];
}

console.log(alternatingSums([50, 60, 60, 45, 70]))
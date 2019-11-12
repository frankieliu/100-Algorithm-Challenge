const incrementalBackups = (lastBackupTime: number, changes: number[][]): number[] => {
    const filesToBackup = [];

    changes.forEach(change => {
        if (!filesToBackup.includes(change[1]) && change[0] > lastBackupTime) {
            filesToBackup.push(change[1]);
        }
    });

    return filesToBackup.sort();
}

console.log(incrementalBackups(461620205, [[461620203, 1], 
    [461620204, 2], 
    [461620205, 6],
    [461620206, 5], 
    [461620207, 3], 
    [461620207, 5], 
    [461620208, 1]]));

const areEquallyStrong = (yourLeft: number, yourRight: number, 
    friendsLeft: number, friendsRight: number): boolean => {
    var yourStrongest;
    var yourWeakest;
    var friendsStrongest;
    var friendsWeakest;

    if (yourLeft > yourRight) {
        yourStrongest = yourLeft;
        yourWeakest = yourRight;
    }
    else {
        yourStrongest = yourRight;
        yourWeakest = yourLeft;
    }

    if (friendsLeft > friendsRight) {
        friendsStrongest = friendsLeft;
        friendsWeakest = friendsRight;
    }
    else {
        friendsStrongest = friendsRight;
        friendsWeakest = friendsLeft;
    }
    
    return (yourStrongest === friendsStrongest) && (yourWeakest === friendsWeakest);
}

console.log(areEquallyStrong(10, 15, 15, 10))
console.log(areEquallyStrong(15, 10, 15, 10))
console.log(areEquallyStrong(15, 10, 15, 9))

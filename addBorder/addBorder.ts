/*
const addBorder = (picture: string[]): string[] => {
    var border = '**';
    for (var i = 0; i < picture[0].length; i++) {
        border = border + '*';
    }

    picture.forEach((item, index) => picture[index] = '*' + item + '*');
    picture.unshift(border);
    picture.push(border);

    return picture;
}
*/

const addBorder = (picture: string[]): string[] => {
    const border = '*'.repeat(picture[0].length + 2)

    picture.forEach((item, index) => picture[index] = '*'.concat(picture[index], '*'));
    picture.unshift(border);
    picture.push(border);

    return picture;
}

console.log(addBorder(["abc", "ded"]));
console.log(addBorder(["tre", "yis", "rad"]));
const arr = [
    [7, 8, 9],
    [0, 1, 4],
    [5, 2, 0],
    [3, 1, 8]
];
let counter = 0;
for (let i = 0; i < arr[0].length; i++) {
    for (let j = 0; j < arr.length; j++) {
        if (arr[j][i] === 0) {
            break;
        }
        counter += arr[j][i]
    }
}
console.log(counter);
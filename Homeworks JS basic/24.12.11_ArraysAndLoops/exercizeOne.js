function findNumber(number, array) {
    let occurences = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === number) {
            occurences++;
        }
    }
    return occurences;
}
let input = Number(prompt("Enter a number:"));
let theArray = [8, 6, 5, 6, 7, 6, 5, 4, 5, 6, 7, 8, 9, 4];
console.log(`There are ${findNumber(input, theArray)} of number ${input} in the array ${theArray}`);

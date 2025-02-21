## Higher-order functions

Primerite vo prodolzenie e se Arrow functions, a moze i so Anonymous i so Regular.

for (let i = 0; i < students.length; i++) {
### forEach
    students.forEach(student => console.log(`${student.firstName} ${student.lastName}`));
### filter
    let above18 = students.filter(student => student.age >= 18);
### map
Map accepts a function as an argument. 
But this function will execute a code on every item of a collection and then return it.
Pr.
    let fiveGradeStudentsNames = students
        .filter(student => student.averageGrade === 5)
        .map(student => `${student.firstName} ${student.lastName}`);
### reduce
Reduce is a function that accepts a function with two parameters as an argument and a starting value. 
This function aggregates multiple values from a collection into one place.
pr.
    let allGradesExeptLowest = students
        .filter(student => student.averageGrade > 1)
        .map((student) => student.averageGrade)
        .reduce((sum, grade) => sum += grade, 0);
### sort
It changes the original array. So if we want to keep the original order of our array we have to create a new variable with
the copy of the original variable and sort that, so that our original array can stay the same.
Pr.
    function copyArray(array) {
        let copied = [];
        array.forEach(x => copied.push(x));
        return copied;
    }
    studentss.sort((student1, student2) => student2.grade - student1.grade); // Descending
    studentss.sort((student1, student2) => student1.grade - student2.grade); // Ascending
### every
Every is a function that accepts a function as an argument. 
This function tests every value from the collection and returns true or false, and if every value in the collection is true for the expression, it returns true. 
Pr.
    let ages = [18, 16, 30, 42, 9];
    let areAllMature = ages.every(age => age >= 18); // false
### some
Some is a function that accepts a function as an argument. This function has an expression that tests every value from
the collection and returns true or false. If one value in the collection is true for the expression, the some function
returns true. If all values are false for the expression, "some" returns false.
Pr. 
    let ages = [18, 16, 30, 42, 9];
    let isSomeoneUnderage = ages.some(age => age < 18);  // true
### find
Pr.
    let cities = ['Skopje', 'Barcelona', 'New York', 'Berlin', 'Paris'];
    let barcelona = cities.find(city => city === 'Barcelona');  // 'Barcelona'
### findIndex
Pr.
    let cities = ['Skopje', 'Barcelona', 'New York', 'Berlin', 'Paris'];
    let barcelonaIndex = cities.findIndex(city => city === 'Barcelona');  // 1
### includes
Pr.
    let cities = ['Skopje', 'Barcelona', 'New York', 'Berlin', 'Paris'];
    let isBarcelonaInArray = cities.includes('Barcelona');  // true
### flat
If no argument is passed, the flat function flattens the array to one level.
Pr.
    let numbers = [1, 2, [3, 4, [5, 6]]];
    let flattened = numbers.flat(2);  // [1, 2, 3, 4, 5, 6]
### flatMap
FlatMap is a function that accepts a function as an argument. 
This function has an expression that tests every value from the collection and returns true or false. 
If one value in the collection is true for the expression, the flatMap function returns that value. 
If all values are false for the expression, "flatMap" returns undefined.
Pr.
    let words = ["apple", "banana", "cherry"];
    let characters = words.flatMap(word => word.split('')); // ["a", "p", "p", "l", "e", "b", "a", "n", "a", "n", "a", "c", "h", "e", "r", "r", "y"]
### join
Pr.
    let cities = ['Skopje', 'Barcelona', 'New York', 'Berlin', 'Paris'];
    let joined = cities.join(' - '); // 'Skopje - Barcelona - New York - Berlin - Paris'
### slice
Slice is a function that accepts two numbers as arguments. 
This function returns a new array with the elements from the first argument index to the second argument index. 
If no second argument is passed, the slice function returns a new array with the elements from the first argument index to the end of the array.
Pr. 
    let cities = ['Skopje', 'Barcelona', 'New York', 'Berlin', 'Paris'];
    let sliced = cities.slice(1, 3); // ['Barcelona', 'New York']
### splice
Splice is a function that accepts three arguments. 
The first argument is the index from which to start removing elements. 
The second argument is the number of elements to remove. 
The third argument is the element to add at the index. 
If no third argument is passed, the splice function only removes elements. 
Pr.
    let cities = ['Skopje', 'Barcelona', 'New York', 'Berlin', 'Paris'];
    let spliced = cities.splice(1, 2, 'London'); // ['Skopje', 'London', 'Berlin', 'Paris']
### reverse
Pr. 
    let cities = ['Skopje', 'Barcelona', 'New York', 'Berlin', 'Paris'];
    let reversed = cities.reverse(); // ['Paris', 'Berlin', 'New York', 'Barcelona', 'Skopje']
}
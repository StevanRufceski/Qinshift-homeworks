function findNumber (array, type) {
    let filteredArray = [];
    if (type === "odd") {
        // for (let j=0; j<array.length; j++){
        //     if (array[j]%2 !== 0) {
        //         filteredArray.push(array[j])
        //     }
        // }
        for (let num of array){
            if (num %2 !== 0) {
                filteredArray.push(num)
            }
        }
        console.log(`New list of odd array numbers is ${filteredArray}.`)

    }else if (type === "even") {
        // for (let j=0; j<array.length; j++){
        //     if (array[j]%2 === 0) {
        //         filteredArray.push(array[j])
        //     }
        // }
        for (let num of array){
            if (num %2 === 0) {
                filteredArray.push(num)
            }
        }
        console.log(`New list of even array numbers is ${filteredArray}.`)
    }else{
        console.log(`The type was not correct. Please enter "odd" or "even".`)
    }
    return filteredArray;
}
let theArray=[];
for (i=0; i<10; i++){
    theArray[i]=Number(prompt("Enter number element to the array!"));
}
let choice=prompt("Which array numbers do you want to find, odd or even?")
findNumber (theArray, choice);


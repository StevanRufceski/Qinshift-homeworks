function validateNumber(numberToValidate) {
    let result = isNaN(parseInt(numberToValidate));
    return result;
}

function askInput(index) {
    if (index<=4){
        let askedNumber = prompt(`Please input number with index [${index}] for the array:`)
        if (validateNumber(askedNumber) === false) {
            array.push(Number(askedNumber));
            index++;
            askInput(index);
        }else if (askedNumber === null){
            return;
        }else{
            alert(`Please enter number correctly!`);
            askInput(index);
        }
    }else{
        summingArray(array);
    }
}

function summingArray(array){
    let sum = 0;
    for (i=0; i<array.length; i++) {
        sum = sum + array[i];
    }
    alert(`The sum of the array you entered is ${sum}.`);
}

let array = [];
let a = 0;
askInput(a);
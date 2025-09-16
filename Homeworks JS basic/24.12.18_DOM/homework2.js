console.log("connected");
document.getElementsByTagName("h2")

let arrayOfNumbers = [];

function readAnswer(arrayToCalculate){
    answer = (prompt ("Would you like to add new number to the array? (Y-yes, N-no")).toLowerCase();
    if ((answer !== "n")&&(answer !== "y")){
        alert("Please answer with 'Y' or 'N'.")
        readAnswer(arrayToCalculate)
    }else if (answer === null){
        return
    }else if (answer === "n"){
        let sum = 0;
        for (let i=0; i<arrayToCalculate.length; i++){
            document.getElementsByTagName("ul")[0].innerHTML += `<li>${arrayToCalculate[i]}</li>`
            sum = sum + arrayToCalculate[i];
        }
        document.getElementsByTagName("h2")[0].innerText = sum;
        document.getElementsByTagName("h3")[0].innerText += "= "+sum;

    }else if (answer === "y"){
        document.getElementsByTagName("h3")[0].innerText += "+";

        readArray(arrayToCalculate);
    }else  {
        return
    }
}

function readArray (arrayOfNumbers){
    newNumber = Number(prompt("Enter new number in the array!"));
    if (isNaN(newNumber)) {
        alert ("Please enter number correctly.")
        readArray();
    }else if (newNumber === null) {
        return
    }else {
        arrayOfNumbers.push(newNumber);
        document.getElementsByTagName("h3")[0].innerText += newNumber;

        readAnswer(arrayOfNumbers);
    }
}

readArray(arrayOfNumbers);
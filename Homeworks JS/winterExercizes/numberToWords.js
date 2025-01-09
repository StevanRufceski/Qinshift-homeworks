let numberOne = "", numberTwo = "", result = "", operatorOne = "", operatorTwo = "";



// -------------- C & del --------------
let c = document.getElementById("c");
c.addEventListener("click", function(){
    document.getElementById("displayDown").value = "";
    document.getElementById("displayUp").innerText = "";
    numberOne = "";
    numberTwo = "";
    operatorOne = "";
    operatorTwo = "";
    result = "";
})
let del = document.getElementById("del");
del.addEventListener("click", function(){
    if (document.getElementById("displayDown").value !== "") {
        document.getElementById("displayDown").value = document.getElementById("displayDown").value.slice(0,-1);
    }
})
// ------------ READING NUMBER ---------
let inputBox = document.getElementById("displayDown");
let invalidChars = ["-", "+", "e", "E", "."];
inputBox.addEventListener("keydown", function(e) {
  if (invalidChars.includes(e.key)) {
    e.preventDefault();
  }
});
// ------------ PROCESSING NUMBER ---------

let convert = document.getElementById("convert");
convert.addEventListener("click", function(){
    let number = document.getElementById("displayDown").value;

    // if ((numberOne === "")&&(document.getElementById("displayDown").innerText !== "")) {
    //     numberOne = Number(document.getElementById("displayDown").innerText);
    //     operatorOne = String(document.getElementById("covert").innerText);
    //     document.getElementById("displayUpOne").innerText = numberOne;
    //     document.getElementById("displayUpTwo").innerText = document.getElementById("covert").innerText;
    //     document.getElementById("displayDown").innerText = ""
    // } else if ((numberOne !== "")&&(document.getElementById("displayDown").innerText !== "")){
    //     numberTwo = Number(document.getElementById("displayDown").innerText);
    //     operatorTwo = String(document.getElementById("covert").innerText);
    //     switch (operatorOne) {
    //         case "+":
    //             result = numberOne + numberTwo;
    //             break;
    //         case "-":
    //             result = numberOne - numberTwo;
    //             break;
    //         case "*":
    //             result = numberOne * numberTwo;
    //             break;
    //         case "/":
    //             result = numberOne / numberTwo;
    //             break;
    //     }
    //     operatorOne = operatorTwo;
    //     numberOne = result;
    //     document.getElementById("displayUpOne").innerText = numberOne;
    //     document.getElementById("displayUpTwo").innerText = document.getElementById("covert").innerText;
    //     document.getElementById("displayDown").innerText = ""
    // } else if ((numberOne !== "")&&(document.getElementById("displayDown").innerText === "")){
    //     operatorOne = String(document.getElementById("covert").innerText);
    //     document.getElementById("displayUpTwo").innerText = document.getElementById("covert").innerText;
    // }
})



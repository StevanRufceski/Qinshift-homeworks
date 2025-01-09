const n0 = "zero", n1 = "one", n2 = "two", n3 = "three", n4 = "four", n5 = "five", n6 = "six", n7 = "seven", n8 = "eight", n9 = "nine";
const n10 = "ten", n11 = "eleven", n12 = "twelve"
const n13 = "thirteen", n14 = "fourteen", n15 = "fifteen", n16 = "sixteen", n17 = "seventeen", n18 = "eighteen", n19 = "nineteen";
const n20 = "twenty", n30 = "thirty", n40 = "fourty", n50 = "fifty", n60 = "sixty", n70 = "seventy", n80 = "eighty", n90 = "ninety"
const n100 = "hundred", n1000 = "thousend"

// -------------- C & del --------------
let c = document.getElementById("c");
c.addEventListener("click", function(){
    document.getElementById("inputNumber").value = "";
    document.getElementById("displayWords").innerText = "";
})
let del = document.getElementById("del");
del.addEventListener("click", function(){
    if (document.getElementById("inputNumber").value !== "") {
        document.getElementById("inputNumber").value = document.getElementById("inputNumber").value.slice(0,-1);
    }
})
// ------------ READING NUMBER ---------
let inputBox = document.getElementById("inputNumber");
let invalidChars = ["-", "+", "e", "E", "."];
inputBox.addEventListener("keydown", function(e) {
  if ((invalidChars.includes(e.key))||(document.getElementById("inputNumber").value[0]==="0")){
    e.preventDefault();
  } 
})
// ------------ PROCESSING NUMBER ---------
let convert = document.getElementById("convert");
convert.addEventListener("click", function(){
  document.getElementById("displayWords").innerText = "ojwnveronjv weojncoerjnfv nuwejncweojnc ojwncowenco ojwnecowenjc owencowenc"

  if (document.getElementById("inputNumber").value !== "") {
    let number = document.getElementById("inputNumber").value;
    document.getElementById("displayWords").innerText += number;

  } else {
    alert ("Please input the number you want to convert to words!")
  }
})

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




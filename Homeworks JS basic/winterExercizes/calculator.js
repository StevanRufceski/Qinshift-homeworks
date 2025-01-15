let calculator = {
    status: true,
}
let numberOne = "", numberTwo = "", result = "", operatorOne = "", operatorTwo = "";

// -------------- AC & C & del --------------
let ac = document.getElementById("ac");
ac.addEventListener("click", function(){
    document.getElementById("displayDown").innerText = "";
    document.getElementById("displayUpOne").innerText = "";
    document.getElementById("displayUpTwo").innerText = "";
    numberOne = "";
    numberTwo = "";
    operatorOne = "";
    operatorTwo = "";
    result = "";
    if (calculator.status === true){
        calculator.status = false;
        for(i=0; i<document.getElementsByClassName("operations").length; i++){
            document.getElementsByClassName("operations")[i].disabled = false;
        }
    }else{
        calculator.status = true;
        for(i=0; i<document.getElementsByClassName("operations").length; i++){
            document.getElementsByClassName("operations")[i].disabled = true;
        }
    }
})
let c = document.getElementById("c");
c.addEventListener("click", function(){
    document.getElementById("displayDown").innerText = "";
    document.getElementById("displayUpOne").innerText = "";
    document.getElementById("displayUpTwo").innerText = "";
    numberOne = "";
    numberTwo = "";
    operatorOne = "";
    operatorTwo = "";
    result = "";
})
let del = document.getElementById("del");
del.addEventListener("click", function(){
    if (document.getElementById("displayDown").innerText !== "") {
        document.getElementById("displayDown").innerText = document.getElementById("displayDown").innerText.slice(0,-1);
    }
})

// -------------- NUMBER ELEMENTS --------------
let comma = document.getElementById("comma");
comma.addEventListener("click", function(){
    let stringOne = document.getElementById("displayDown").innerText;
    if (stringOne.indexOf(".") === -1){
        if (document.getElementById("displayDown").innerText.length < 15){
            document.getElementById("displayDown").innerText+=".";
        }
        }
})
let zero = document.getElementById("zero");
zero.addEventListener("click", function(){
    let stringOne = document.getElementById("displayDown").innerText;
    if (((stringOne[0] !== "0")||((stringOne[0] === "0")&&(stringOne[1] === ".")))&&(operatorOne !=="/")){
        if (document.getElementById("displayDown").innerText.length < 15){
            document.getElementById("displayDown").innerText+="0";
        }    }
})
let one = document.getElementById("one");
one.addEventListener("click", function(){
    if (document.getElementById("displayDown").innerText.length < 15){
        document.getElementById("displayDown").innerText+="1";
    }
})
let two = document.getElementById("two");
two.addEventListener("click", function(){
    if (document.getElementById("displayDown").innerText.length < 15){
        document.getElementById("displayDown").innerText+="2";
    }
})
let three = document.getElementById("three");
three.addEventListener("click", function(){
    if (document.getElementById("displayDown").innerText.length < 15){
        document.getElementById("displayDown").innerText+="3";
    }
})
let four = document.getElementById("four");
four.addEventListener("click", function(){
    if (document.getElementById("displayDown").innerText.length < 15){
        document.getElementById("displayDown").innerText+="4";
    }
})
let five = document.getElementById("five");
five.addEventListener("click", function(){
    if (document.getElementById("displayDown").innerText.length < 15){
        document.getElementById("displayDown").innerText+="5";
    }
})
let six = document.getElementById("six");
six.addEventListener("click", function(){
    if (document.getElementById("displayDown").innerText.length < 15){
        document.getElementById("displayDown").innerText+="6";
    }
})
let seven = document.getElementById("seven");
seven.addEventListener("click", function(){
    if (document.getElementById("displayDown").innerText.length < 15){
        document.getElementById("displayDown").innerText+="7";
    }
})
let eight = document.getElementById("eight");
eight.addEventListener("click", function(){
    if (document.getElementById("displayDown").innerText.length < 15){
        document.getElementById("displayDown").innerText+="8";
    }
})
let nine = document.getElementById("nine");
nine.addEventListener("click", function(){
    if (document.getElementById("displayDown").innerText.length < 15){
        document.getElementById("displayDown").innerText+="9";
    }
})
// -------------- OPERATORS --------------
let plus = document.getElementById("plus");
plus.addEventListener("click", function(){
    if ((numberOne === "")&&(document.getElementById("displayDown").innerText !== "")) {
        numberOne = Number(document.getElementById("displayDown").innerText);
        operatorOne = String(document.getElementById("plus").innerText);
        document.getElementById("displayUpOne").innerText = numberOne;
        document.getElementById("displayUpTwo").innerText = document.getElementById("plus").innerText;
        document.getElementById("displayDown").innerText = ""
    } else if ((numberOne !== "")&&(document.getElementById("displayDown").innerText !== "")){
        numberTwo = Number(document.getElementById("displayDown").innerText);
        operatorTwo = String(document.getElementById("plus").innerText);
        switch (operatorOne) {
            case "+":
                result = numberOne + numberTwo;
                break;
            case "-":
                result = numberOne - numberTwo;
                break;
            case "*":
                result = numberOne * numberTwo;
                break;
            case "/":
                result = numberOne / numberTwo;
                break;
        }
        operatorOne = operatorTwo;
        numberOne = result;
        document.getElementById("displayUpOne").innerText = numberOne;
        document.getElementById("displayUpTwo").innerText = document.getElementById("plus").innerText;
        document.getElementById("displayDown").innerText = ""
    } else if ((numberOne !== "")&&(document.getElementById("displayDown").innerText === "")){
        operatorOne = String(document.getElementById("plus").innerText);
        document.getElementById("displayUpTwo").innerText = document.getElementById("plus").innerText;
    }
})
let minus = document.getElementById("minus");
minus.addEventListener("click", function(){
    if ((numberOne === "")&&(document.getElementById("displayDown").innerText !== "")) {
        numberOne = Number(document.getElementById("displayDown").innerText);
        operatorOne = String(document.getElementById("minus").innerText);
        document.getElementById("displayUpOne").innerText = numberOne;
        document.getElementById("displayUpTwo").innerText = document.getElementById("minus").innerText;
        document.getElementById("displayDown").innerText = ""
    } else if ((numberOne !== "")&&(document.getElementById("displayDown").innerText !== "")){
        numberTwo = Number(document.getElementById("displayDown").innerText);
        operatorTwo = String(document.getElementById("minus").innerText);
        switch (operatorOne) {
            case "+":
                result = numberOne + numberTwo;
                break;
            case "-":
                result = numberOne - numberTwo;
                break;
            case "*":
                result = numberOne * numberTwo;
                break;
            case "/":
                result = numberOne / numberTwo;
                break;
        }        
        operatorOne = operatorTwo;
        numberOne = result;
        document.getElementById("displayUpOne").innerText = numberOne;
        document.getElementById("displayUpTwo").innerText = document.getElementById("minus").innerText;
        document.getElementById("displayDown").innerText = ""
    } else if ((numberOne !== "")&&(document.getElementById("displayDown").innerText === "")){
        operatorOne = String(document.getElementById("minus").innerText);
        document.getElementById("displayUpTwo").innerText = document.getElementById("minus").innerText;
    }
})
let multi = document.getElementById("multi");
multi.addEventListener("click", function(){
    if ((numberOne === "")&&(document.getElementById("displayDown").innerText !== "")) {
        numberOne = Number(document.getElementById("displayDown").innerText);
        operatorOne = String(document.getElementById("multi").innerText);
        document.getElementById("displayUpOne").innerText = numberOne;
        document.getElementById("displayUpTwo").innerText = document.getElementById("multi").innerText;
        document.getElementById("displayDown").innerText = ""
    } else if ((numberOne !== "")&&(document.getElementById("displayDown").innerText !== "")){
        numberTwo = Number(document.getElementById("displayDown").innerText);
        operatorTwo = String(document.getElementById("multi").innerText);
        switch (operatorOne) {
            case "+":
                result = numberOne + numberTwo;
                break;
            case "-":
                result = numberOne - numberTwo;
                break;
            case "*":
                result = numberOne * numberTwo;
                break;
            case "/":
                result = numberOne / numberTwo;
                break;
        }        
        operatorOne = operatorTwo;
        numberOne = result;
        document.getElementById("displayUpOne").innerText = numberOne;
        document.getElementById("displayUpTwo").innerText = document.getElementById("multi").innerText;
        document.getElementById("displayDown").innerText = ""
    } else if ((numberOne !== "")&&(document.getElementById("displayDown").innerText === "")){
        operatorOne = String(document.getElementById("multi").innerText);
        document.getElementById("displayUpTwo").innerText = document.getElementById("multi").innerText;
    }
})
let divide = document.getElementById("divide");
divide.addEventListener("click", function(){
    if ((numberOne === "")&&(document.getElementById("displayDown").innerText !== "")) {
        numberOne = Number(document.getElementById("displayDown").innerText);
        operatorOne = String(document.getElementById("divide").innerText);
        document.getElementById("displayUpOne").innerText = numberOne;
        document.getElementById("displayUpTwo").innerText = document.getElementById("divide").innerText;
        document.getElementById("displayDown").innerText = ""
    } else if ((numberOne !== "")&&(document.getElementById("displayDown").innerText !== "")){
        numberTwo = Number(document.getElementById("displayDown").innerText);
        operatorTwo = String(document.getElementById("divide").innerText);
        switch (operatorOne) {
            case "+":
                result = numberOne + numberTwo;
                break;
            case "-":
                result = numberOne - numberTwo;
                break;
            case "*":
                result = numberOne * numberTwo;
                break;
            case "/":
                result = numberOne / numberTwo;
                break;
        }        
        operatorOne = operatorTwo;
        numberOne = result;
        document.getElementById("displayUpOne").innerText = numberOne;
        document.getElementById("displayUpTwo").innerText = document.getElementById("divide").innerText;
        document.getElementById("displayDown").innerText = ""
    } else if ((numberOne !== "")&&(document.getElementById("displayDown").innerText === "")){
        operatorOne = String(document.getElementById("divide").innerText);
        document.getElementById("displayUpTwo").innerText = document.getElementById("divide").innerText;
    }
})
let equal = document.getElementById("equal");
equal.addEventListener("click", function(){
    if ((numberOne !== "")&&(document.getElementById("displayDown").innerText !== "")){
        numberTwo = Number(document.getElementById("displayDown").innerText);
        switch (operatorOne) {
            case "+":
                result = numberOne + numberTwo;
                break;
            case "-":
                result = numberOne - numberTwo;
                break;
            case "*":
                result = numberOne * numberTwo;
                break;
            case "/":
                result = numberOne / numberTwo;
                break;
        }        
        operatorOne = "";
        numberOne = result;
        document.getElementById("displayUpOne").innerText = "";
        document.getElementById("displayUpTwo").innerText = "";
        document.getElementById("displayDown").innerText = numberOne;
    }
})


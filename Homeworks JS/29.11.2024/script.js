function func1 (){
    let feets = document.getElementById("feets").value;
    let meters = feets * 0.3048;
    alert(feets+" feets are "+meters+" meters.");
}
function func2 (){
    let squareHeight = document.getElementById("height").value;
    let squareLenght = document.getElementById("lenght").value;
    let squareArea = squareHeight*squareLenght;
    alert("You entered dimensions of a rectangle with "+ squareArea + " square meters area.");
}
function func3 (){
    let circleRadius = document.getElementById("radius").value;
    let circleArea = circleRadius*circleRadius*3.14;
    alert("You entered radius of a circle with "+ circleArea + " square meters area.");
}
function func4 (){
    let numberOfPhones = 30;
    let singlePhonePrice = 119.95;
    let phoneTax = 5;
    let taxRate = 1+phoneTax/100
    let totalPrice = numberOfPhones*singlePhonePrice*taxRate;
    alert("The total price is "+ totalPrice + " dollars.");
}




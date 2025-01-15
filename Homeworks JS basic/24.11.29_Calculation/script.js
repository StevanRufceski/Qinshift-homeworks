
let convertButton=document.getElementById("convertButton");
convertButton.addEventListener("click", feetToMetersConvertor);
function feetToMetersConvertor (){
    let feets = Number(document.getElementById("feets").value);
    let meters = feets * 0.3048;
    alert(feets+" feets are "+meters+" meters.");
}
let calculateRectangle=document.getElementById("calculateRectangle");
calculateRectangle.addEventListener("click", rectangleAreaCalculator);
function rectangleAreaCalculator (){
    let squareHeight = Number(document.getElementById("height").value);
    let squareLenght = Number(document.getElementById("lenght").value);
    let squareArea = squareHeight*squareLenght;
    alert("You entered dimensions of a rectangle with "+ squareArea + " square meters area.");
}
let calculateCircle=document.getElementById("calculateCircle");
calculateCircle.addEventListener("click", circleAreaCalculator);
function circleAreaCalculator (){
    let circleRadius = Number(document.getElementById("radius").value);
    let circleArea = circleRadius*circleRadius*3.14;
    alert("You entered radius of a circle with "+ circleArea + " square meters area.");
}
let phonesPrice=document.getElementById("phonesPrice");
phonesPrice.addEventListener("click", phoneTotalPriceCalculator);
function phoneTotalPriceCalculator (){
    let numberOfPhones = 30;
    let singlePhonePrice = 119.95;
    let phoneTax = 5;
    let taxRate = 1+phoneTax/100
    let totalPrice = numberOfPhones*singlePhonePrice*taxRate;
    alert("The total price is "+ totalPrice + " dollars.");
}






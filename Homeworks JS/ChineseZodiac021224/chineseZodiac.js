let answerButton = document.getElementById("answerButton");
answerButton.addEventListener("click", answerFunc);
function answerFunc() {
    let answer = document.querySelector('input[name="answer"]:checked').value;
    if (answer == "Yes") {
        askBirthYear();
    }
    if (answer == "No") {
        alert("Ok. Take yor time, think a lot.")
    }
}

let currentTime = new Date();
let currentYear = currentTime.getFullYear();
let currentMonth = currentTime.getMonth()+1;
let currentDay = currentTime.getDay()+1;
// let inputYear, inputMonth, inputDay;

function askBirthYear(){
    inputYear = prompt ("What is YEAR of birth?")
    if ((Number(inputYear) >= 1900) && (Number(inputYear) <= currentYear)){
        askBirthMonth();
    }else if (inputYear === null){
        return;
    }else{
        alert("Please enter your YEAR of birth CORRECTLY!");
        askBirthYear();
    }
}
function askBirthMonth(){
    inputMonth = prompt ("What is MONTH of birth? (1 for January, 12 for December)")
    if ((Number(inputMonth) >= 1) && (Number(inputMonth) <= 12) && ((Number(inputYear) < currentYear) || (Number(inputMonth) <= currentMonth))){
        askBirthDay();
    }else if (inputMonth === null){
        return;
    }else{
        alert(`Please enter your MONTH of birth CORRECTLY\! 
            \(1 for January, 12 for December\)`);
        askBirthMonth();
    }
}
function askBirthDay(){
    inputDay = prompt ("What is DAY of birth?")
    if ((Number(inputDay) >= 1) && (Number(inputDay) <= 40) && ((Number(inputYear) < currentYear) || (Number(inputMonth) < currentMonth) || (Number(inputDay) <= currentDay))){
        signInfo();
    }else if (inputDay === null){
        return;
    }else{
        alert("Please enter your DAY of birth CORRECTLY!");
        askBirthDay();
    }
}
function signInfo () {
    alert("Your birthday is at "+inputDay+"-"+inputMonth+"-"+inputYear);
    let birthDateCalculation = (Number(inputYear)-4)%12;
    alert("Calculation says "+birthDateCalculation);

    if (birthDateCalculation == 0) {
        alert('In chinese zodiac, your sign is "RAT".');
        }
        else if (birthDateCalculation == 1){
            alert('In chinese zodiac, your sign is "OX".');
        }
        else if (birthDateCalculation == 2){
            alert('In chinese zodiac, your sign is "TIGER".');
        }
        else if (birthDateCalculation == 3){
            alert('In chinese zodiac, your sign is "RABBIT".');
        }
        else if (birthDateCalculation == 4){
            alert('In chinese zodiac, your sign is "DRAGON".');
        }
        else if (birthDateCalculation == 5){
            alert('In chinese zodiac, your sign is "SNAKE".');
        }
        else if (birthDateCalculation == 6){
            alert('In chinese zodiac, your sign is "HORSE".');
        }
        else if (birthDateCalculation == 7){
            alert('In chinese zodiac, your sign is "GOAT".');
        }
        else if (birthDateCalculation == 8){
            alert('In chinese zodiac, your sign is "MONKEY".');
        }
        else if (birthDateCalculation == 9){
            alert('In chinese zodiac, your sign is "ROOSTER".');
        }
        else if (birthDateCalculation == 10){
            alert('In chinese zodiac, your sign is "DOG".');
        }
        else {
            alert('In chinese zodiac, your sign is "PIG".');
        }
    }


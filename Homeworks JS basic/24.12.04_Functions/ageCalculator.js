function calculateAge (birthYear, yearToday) {
    let age = yearToday - birthYear;
    return age;
}

function askBirthYear(){
    let inputYear = prompt ("What is your YEAR of birth?");
    if ((Number(inputYear) >= 1900) && (Number(inputYear) <= currentYear)){
        alert("You are "+calculateAge(Number(inputYear), Number(currentYear))+" years old.");
        i=i+1;
        if (i<=3){
            askBirthYear();
        }else {
            return;
        }
    }else if (inputYear === null){
        return;
    }else{
        alert("Please enter your YEAR of birth CORRECTLY!");
        askBirthYear();
    }
}

let currentTime = new Date();
let currentYear = currentTime.getFullYear();
let i = 1;
askBirthYear();

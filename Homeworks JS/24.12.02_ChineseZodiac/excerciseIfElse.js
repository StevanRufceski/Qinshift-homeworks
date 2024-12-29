console.log("connected");

let confirmButton = document.getElementById("confirmButton");
confirmButton.addEventListener("click", excercizeFunc);

function excercizeFunc () {
    let askMoneyVolume = prompt("Dear User, how much money, in USD, do you have?");
    if (askMoneyVolume === null){
        return;
    }else if ((Number(askMoneyVolume) >= 0) && (Number(askMoneyVolume) < 30)) {
        alert("If do not have any money, You shoud start working anything you can find, that is legal and paid.");
    }else if ((Number(askMoneyVolume) > 30) && (Number(askMoneyVolume) < 300)) {
        alert("With that much money, go out, have a coffee with someone that is successfull in your eyes, and talk about your options to start woorking.");
    }else if ((Number(askMoneyVolume) >= 300) && (Number(askMoneyVolume) < 3000)) {
        alert("Keep your job, until you find something that will pay more for your services.");
    }else if ((Number(askMoneyVolume) >= 3000) && (Number(askMoneyVolume) < 10000)) {
        alert("You can afford Qinshift Academy. You shoud do what.")
    }else if ((Number(askMoneyVolume) >= 10000) && (Number(askMoneyVolume) < 100000)) {
        alert("Find a business partner. Shoot for bigger projects.");
    }else if ((Number(askMoneyVolume) >= 100000) && (Number(askMoneyVolume) < 1000000)) {
        alert("Start investing. If you have those money, you are smart enough for that.");
    }else if (Number(askMoneyVolume) >= 1000000){
        alert("So, you are a milioner. Enjoy your life.");
    }else {
        alert("Please enter your money ammount CORRECTLY!");
        excercizeFunc();
    }
}



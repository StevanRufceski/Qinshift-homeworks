console.log("connected");
// let inputBtn = document.getElementById("inputBtn");
// inputBtn.addEventListener("click", calFunc)

function calFunc(){
    let newNumber1 = Number(prompt("Enter first number!"));
    let newNumber2 = Number(prompt("Enter second number!"));
    if (((newNumber1-0)<0)||((newNumber2-0)<0)){
        alert("Enter both positive numbers!");
        calFunc();
    }else{
        let resOne = 2*(100 - newNumber1);
        let resTwo = 2*(100 - newNumber2);
        if (resOne<resTwo){
            alert ("First number was closer to 100, than second.")
        }else if (resOne>resTwo){
            alert ("Second number was closer to 100, than second.")
        }else{
            alert ("You entered equal numbers")
        }
    
    }
}
calFunc();

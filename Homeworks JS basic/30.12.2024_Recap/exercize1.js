console.log("connected");
let inputBtn = document.getElementById("inputBtn");
inputBtn.addEventListener("click", calFunc)

function calFunc(){
    let newNumber = Number(document.getElementById("newNumber").value);
    let difference = newNumber - 13;
    if (difference > 10){
        alert(difference*2);
    }else{
        alert(difference)
    }
    
    return difference
}

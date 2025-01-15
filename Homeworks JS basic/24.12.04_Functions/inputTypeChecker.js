let checkTypeBtn = document.getElementById("checkTypeBtn");
checkTypeBtn.addEventListener("click", checkTypeFunction);


function checkTypeFunction(){
    let checkTypeInput1 = document.getElementById("newInput1").value.toLowerCase();
    if (checkTypeInput1 === "undefined") {
        alert("You entered UNDEFINED type of input.")
        console.log("You entered UNDEFINED type of input.")
    }else if((checkTypeInput1 === "true")|| (checkTypeInput1 === "false")) {
        alert("You entered BOOLEAN type of input.")
        console.log("You entered BOOLEAN type of input.")
    }else if((checkTypeInput1 === "null")||(checkTypeInput1 === "")) {
        alert("You entered OBJECT type of input.")
        console.log("You entered OBJECT type of input.")
    }else if(isNaN (checkTypeInput1) === false) {
        alert("You entered NUMBER type of input.")
        console.log("You entered NUMBER type of input.")
    }else{
        alert("You entered STRING type of input.")
        console.log("You entered STRING type of input.")
    }
}

$(document).ready(function(){

    let button = $("button");
    button.on("click", function(){
        let numberOne = Number($("input").eq(0).val());
        let numberTwo = Number($("input").eq(1).val());
        let numberThree = Number($("input").eq(2).val());
        let avgNumber = (numberOne + numberTwo + numberThree)/3;

        if (avgNumber >= 10) {
            $("h3").text(`Average number is ${avgNumber}`)
            $("h3").css("color", "green")
        }else{
            $("h3").text(`Average number is ${avgNumber}`)
            $("h3").css("color", "red")
        }
    })

})
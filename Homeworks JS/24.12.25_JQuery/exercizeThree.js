$(document).ready(function(){
    let button = $("button");
    button.on("click", function(){
        console.log("OK????");
        $("#secondWrapper").hide();
        $("p").css("color", "green")
        button.text("Dont't click me!")
    })

})
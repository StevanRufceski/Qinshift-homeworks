$(document).ready(function(){
    let button = $("button");
    button.on("click", function(){
        let myName = $("input").eq(0).val();
        $("h1").text(`Hello there ${myName}!`)
    })
})
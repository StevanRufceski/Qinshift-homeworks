$(document).ready(function(){
    let button = $("button");
    button.on("click", function(){
        $("h1").first().text("JQuery is awesome");
        $("h1").first().after(`<p> Some text! </p>`);
        $("button").first().css("backgroundColor", "red");
    })
})
console.log("connected")

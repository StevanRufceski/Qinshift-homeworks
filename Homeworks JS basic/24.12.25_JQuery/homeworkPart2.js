$(document).ready(function(){

    function isValidColor(color) {
        // Regular expressions for hex, RGB, and RGBA
        var hexRegex = /^#([0-9A-F]{3}){1,2}$/i;
        var rgbRegex = /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/;
        var rgbaRegex = /^rgba\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3}),\s*(0|1|0?\.\d+)\)$/;

        return hexRegex.test(color) || rgbRegex.test(color) || rgbaRegex.test(color);
    }

    let button = $("button");
    button.on("click", function(){
        let newText = $("#newText").val();
        let newColor = $("#newColor").val();
        console.log(newText, newColor);
        console.log(isValidColor(newColor));
        if ((newText !== "")&&(isValidColor(newColor))) {
            $("button").first().after(`<h1 style="color: ${newColor};"> ${newText} </h1>
                <h3 style="color: ${newColor};"> ${newText} </h3>
                <h3 style="color: ${newColor};"> ${newText} </h3>
                <h3 style="color: ${newColor};"> ${newText} </h3>`);
        }else if ((newText === "")&&(isValidColor(newColor))) {
            $("button").first().after(`<h1 style="color: ${newColor};"> ${newText} </h1>
                <h3 style="color: ${newColor};"> ERROR: Please enter some text! </h3>
                <h3 style="color: ${newColor};"> ERROR: Please enter some text! </h3>
                <h3 style="color: ${newColor};"> ERROR: Please enter some text! </h3>`);
        }else if ((newText !== "")&&(isValidColor(newColor) === false)) {
            $("button").first().after(`<h1> ${newText} </h1>
                <h3> ERROR: Please pick valid color! </h3>
                <h3> ERROR: Please pick valid color! </h3>
                <h3> ERROR: Please pick valid color! </h3>`);
        }else{
            $("button").first().after(`<h3> ERROR: Please do something! </h3>
                <h3> ERROR: Please do something! </h3>
                <h3> ERROR: Please do something! </h3>`);
        }
    })
})
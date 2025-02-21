Why are functions in JavaScript considered first-class citizens? Because they can act and be used as any other entity such as:

* Stored in a variable
    Anonymous and Arrow functions are stored in variables... they start with let funcName = function(){}
* Stored in an array
    Ovie funkcii ne se inicijaliziraat tuku direktno sefiniraat kako Arrow funkcii:
        let numberStatsFunctions = [
            (num1, num2) => {
                let num3 = num1 * num2;
                return num3 > 0 ? "Positive" : "Negative"; // Corrected return statement
            },
            (num) => num % 2 === 0 ? "Odd" : "Even",
            (num) => num >= 0 ? num.toString().length : num.toString().length - 1
        ];
        // We can call the functions from the array
        // We can loop it with for as well
        console.log(numberStatsFunctions[0](2,-4)); // Negative
        console.log(numberStatsFunctions[1](2)); // Even
        console.log(numberStatsFunctions[2](2)); // 1
    Na ovoj nacin se dobiva dolg kod za nizata bidejki funkciite treba da se definiraat vo nea, pa podobro e funkciite posebno da se definiraat i da im se dadat soodvetni iminja. Eventualno moze da e korisno koga funkciite se epten slicni i kratki.
* Used as an argument to another function
    Kako argument moze da se prakjaat samo Regular functions cii argumenti se direktno vpisani.
    Pr.
        const calculate = (numberOne, numberTwo, operation) => {
            return operation(numberOne, numberTwo)
        };
        const calculationOne = calculate(5, 10, add);
        console.log(calculationOne);
* Used as a return value from another function.
    Funcijata koja za return vrakja funkcija, moze da se povika na povekje nacini no najdobro e da se pratat argumenti i za glavna funkcija i za return funkcijata.
    Funkcijata koja se vrakja kako return ne se inicijalizira tuku direktno se definira bezimeno i kako sto se definira method na object.
    Pr.
        function calculator(operation) {
            switch (operation) {
            case  "+":
                return function (number1, number2) {
                    return number1 + number2
                };
                break;
        console.log(calculator("-")(7, 2)); // 5
* Have properties and methods like objects
    Properties i Methods na funkcija se dodavaat kako i na object, so dot notation. Vrednostite i argumentite moze da bidat direktno zakucani ili prevzemeni od glavnata funkcija.
    Pr.
        functionName.propertyName = 2 // za property
        functionName.methodName = function (2,5){ 
            return 2*5
        }                             // za method

OUT OF CONTEXT
- TERNARY OPERATOR - za da ne proveruvas so IF/ELSE, se koristi ? i posle nego sto da pravi akoe e true, pa :, pa sto da pravi ako e false
Pr.
    const checkIfAdult = (userAge) => {
        if(userAge >= 18){
            return 'User is adult'
        }else {
            return 'User is not adult'
        }
    }

    console.log(checkIfAdult(18));
    console.log(checkIfAdult(15));

    // With ternary 
    const checkIfAdultSecond = (userAge) => {
    return userAge >= 18 ? "User is adult" : "User is not adult";
    };
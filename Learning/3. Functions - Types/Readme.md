Function types
    REGULAR FUNCTIONS
            function regularFunction(paramA, paramB){
                return paramA*ParamB                 c
            }
            console.log(regularFunction(2,3))
    ANONYMOUS FUNCTIONS – used when we need a function at the spot without identifying it, usually when sending it as a parameter or returning it
            let anonymousFunction = function (paramA, paramB){
                return paramA, paramB
            }
            console.log(anonymousFunction(2,3))
    ARROW FUNCTIONS – A shorter way of writing anonymous functions (easier for callbacks, not recommended for object methods), used when there is only one expression
            let arrowFunction = (paramA, paramB) => {
            return paramA, paramB
            }
            console.log(arrowFunction(2,3))
    SELF INVOKED FUNCTIONS – Usually used for executing a code once in a closed scope


Razlikata megju Regular i Anonymous functions se sto regular se deklarira i definira kako funkcija, a anonymous se deklarira kako const a se definira kako funkcija.
Razlika megju Anonymous i Arrow funkcii se toa sto namesto da se pise function pred (parameters), se pisuva => posle (parameters).
    firstButton.addEventListener("click", function(event){
        event.preventDefault();
        console.log('Button is clicked');
    });
    secondButton.addEventListener("click", (event) => {
        event.preventDefault();
        console.log('Button is clicked arrow function');
    });

Anonimna i Arrow funkcija moze da se povikaat i po ime, kako Regular funkcija, no i bez ime, direktno funkcijata, kako koga se isprakjaat kako parametar vo druga funkcija ili vo event.

VAZNO: 
Vo event koga se povikuva funkcija, taa, osven parametar event ne moze da prima drugi parametri!
Za da se povika funkcija, mora taa prethodno da e inicijalizirana, zatoa funkciite se pisuvaat najgore vo kodot.

OUT OF CONTEXT:
forOf ciklus (pokratkiot za pisuvanje od klasicen FOR ciklus) se koristi koga treba da se izvrsi funcijata na site elementi od niza, bez isklucok.
let getFullNames = people => {
    for(let person of people){
        console.log(person);
    }
};
// language selector
// switching among languages in localStorage
document.addEventListener('DOMContentLoaded', function () {
    if (!localStorage.getItem('language')) {
        localStorage.setItem('language', 'Deutsch');
    }
    document.querySelectorAll('#language-selector a img').forEach(option => {
        if (option.alt == localStorage.getItem('language')) {
            option.classList.add('langSelection')
        }
    })

    const languageOptions = document.querySelectorAll('#language-selector a');
    const selectedLanguage = document.getElementsByClassName('langSelection')[0];

    languageOptions.forEach(option => {
        option.addEventListener('click', function (event) {
            event.preventDefault();

            const flagImg = this.querySelector('img');
            const flagSrc = flagImg.src;
            const flagAlt = flagImg.alt;

            this.querySelector('img').src = selectedLanguage.src;
            this.querySelector('img').alt = selectedLanguage.alt;

            selectedLanguage.src = flagSrc;
            selectedLanguage.alt = flagAlt;
            localStorage.setItem('language', flagAlt);
            console.log(flagAlt);

        });
    });
});
// fetching translaed content fromm JSON
function fetchPeople( ) {
    fetch("C:/Users/Viktor/Desktop/Tenderi/WEB/GIT/Qinshift-homeworks/Project-MRA/mlContact/contactPage.html")
    .then(function(response){
        // RAW RESPONSE CONTAINING METEDATA OF THE REQUEST
        console.log(response) 

        let jsonResult = response.text() // WILL RETURN STRINGIFIED VALUE OF THE RESPONSE
        console.log(jsonResult)

        return jsonResult
    })
    .then(function(result) {
        // THIS IS THE JSON RESULT
        // console.log(result);

        let parsedResult = JSON.parse(result);
        console.log(parsedResult);

        let swapiPeople = parsedResult.results;
        console.log(swapiPeople)

        fetchDivResult.innerHTML = ''
        // FUNCTION TO PRINT RESULT SHOULD BE HERE
        for(let i = 0; i < swapiPeople.length; i++){
            fetchDivResult.innerHTML += `<p>${swapiPeople[i].name}</p>`
        }
    }) 
    .catch(function(error){
        // IF REQUEST WAS UNSUCCESS WE GONNA ENTER THE CATCH
        console.error('Error happened:', error)
    })
    .finally(function(){
        // NO MATTER IF THE REQUEST IS SUCCESS OR NOT 
        // FINALLY WILL EXECUTE
        console.log('IN FINALLY')
    })
}
fetchPeople()






// const content = {
//   en: {
//       title: "Welcome!",
//       message: "This is a simple language selector example."
//   },
//   es: {
//       title: "¡Bienvenido!",
//       message: "Este es un ejemplo simple de selector de idioma."
//   },
//   fr: {
//       title: "Bienvenue!",
//       message: "Ceci est un exemple simple de sélecteur de langue."
//   },
//   de: {
//       title: "Willkommen!",
//       message: "Dies ist ein einfaches Beispiel für einen Sprachwähler."
//   }
// };



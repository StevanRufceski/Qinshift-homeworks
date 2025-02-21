So fetch se baraat informaaciite od API..
Potoa so .then, se zema odgovorot na baranjeto za informacii koe preku return vo svojata funkcija go dava na ponatamosna obrabotka.
So vtoro .then, dokolku gi dobieme informaaciite od API koi gi barame, koi se vo JSON format i so ime result, se parsiraat, odnosno se pravat citlivi za Javascript.
So .catch, dokolku ne gi dobieme informaciite, poradi bilo kakvi pricini, javuvame na korisnikot ERROR.
So .finally, se definira funkcija koja kje se izvrsi bez razlika dali se dobil ocekuvaniot response ili error od strana na kontaktiranata API.

function fetchInfo(){
    fetch("URL");
    .then(function(response){
        return response.text()
    })
    .then(function(result){
        let info = JSON.parse(result)
        console.log(info)
    })
    .catch(function(error){
        console.log("Error happened:" error)
    })
    .finally(function(){
        console.log("API call ended.)
    })
}

So AJAX se baraat informacii od API.
So success, dokolku gi bobieme informaciite koi gi barame (response e pozitiven), se zemaat informaciite, se parsiraat od JSON formatot, i se koristat.
So error, dokolku ne gi dobieme (response e negativen), se ispisuva greskata.

function ajaxInfo({
    ajax("URL");
    success: function (response){
        let info = JSON.parse(response)
    }
    error: function(response){
        console.log("Error happend!")
    }
})

Razlika vo sintaksa megju fetch i ajax e pri inicializarija a vo toa sto fetch e klasicna funkcija, a ajax statements se vrsat vo ramkite na varijablata na ajax funkcijata.Odnosno, function ajaxFunc({}), a ne kako function fetchFunc(){}

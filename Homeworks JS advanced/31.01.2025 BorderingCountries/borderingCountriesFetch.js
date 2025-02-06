let ciocArray = [];

function printNeighbour(neighbour){
    let newTr = document.createElement('tr');
    document.getElementsByTagName(`tbody`)[0].appendChild(newTr);

    let tdName = document.createElement('td');
    tdName.innerText = neighbour[0].name.official


    let tdCode = document.createElement('td');
    tdCode.innerText = neighbour[0].cioc

    let tdCapital = document.createElement('td');
    tdCapital.innerText = neighbour[0].capital

    let tdBorders = document.createElement('td');
    tdBorders.innerText = neighbour[0].borders

    newTr.append(tdName, tdCode, tdCapital, tdBorders);
}
function setTable(parsedResult){
    document.getElementsByTagName(`caption`)[0].innerText = `Neighbouring countries of ${parsedResult[0].name.official} are:`
    document.getElementsByTagName(`caption`)[0].style.fontWeight = "bold";

    document.getElementsByTagName(`table`)[0].style.display = `block`;
}
function fetchNeighbours(cioc){
    fetch(`https://restcountries.com/v3.1/alpha/${cioc}`)
    .then(function(response){
        return response.text()
    })
    .then(function(result){
        let neighbour = JSON.parse(result);
        printNeighbour(neighbour);
    })
}
function fetchAllCountries(ciocInput){
    fetch(`https://restcountries.com/v3.1/alpha/${ciocInput}`)
    .then(function(response){
        return response.text()
    })
    .then(function(result){
        let parsedResult = JSON.parse(result);
        setTable(parsedResult);
        for (i = 0; i < parsedResult[0].borders.length; i++){
            let cioc = String(parsedResult[0].borders[i]);
            fetchNeighbours(cioc);
        }
    })
}

fetch(`https://restcountries.com/v3.1/all`)
.then(function(response){
    return response.text()
})
.then(function(result){
    let parsedResult = JSON.parse(result);
    for (i = 0; i < parsedResult.length; i++){
        ciocArray[i] = parsedResult[i].cioc
    }
    return ciocArray;
})

let showNeighboursBtn = document.getElementById(`showNeighboursBtn`);
showNeighboursBtn.addEventListener(`click`, function (){

    document.getElementsByTagName(`tbody`)[0].innerHTML = '';

    let ciocInput = document.getElementById(`ciocInput`).value.toUpperCase();
    if (ciocArray.includes(`${ciocInput}`) === true){
        fetchAllCountries(ciocInput)
    } else {
        alert(`Your input is invalid ICC, please try again!`)
        document.getElementById(`ciocInput`).value = ``
        document.getElementsByTagName(`table`)[0].style.display = `none`;
    }
})
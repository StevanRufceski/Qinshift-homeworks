let icc = `MKD`;
let neighbours = [];

let showNeighboursBtn = document.getElementById(`showNeighboursBtn`);
showNeighboursBtn.addEventListener(`click`, function (){
    fetch(`https://restcountries.com/v3.1/alpha/${icc}`)
    .then(function(response){
        return response.text()
    })
    .then(function(result){
        let parsedResult = JSON.parse(result);
        
        document.getElementsByTagName(`table`)[0].style.display = `block`;

        for (i = 0; i < parsedResult[0].borders.length; i++){
            fetch(`https://restcountries.com/v3.1/alpha/${String(parsedResult[0].borders[i])}`)
            .then(function(response){
                return response.text()
            })
            .then(function(result){
                let neighbour = JSON.parse(result);
                console.log(neighbour)
                console.log(neighbour[0])
                console.log(neighbour[0].cioc)

                
                let newTr = document.createElement('tr');
                newTr.id = String(i)
                document.getElementsByTagName(`tbody`)[0].appendChild(newTr);

                let tdName = document.createElement('td');
                tdName.innerText = neighbour[0].altSpellings[neighbour[0].altSpellings.length-1]
                document.getElementById(`${String(i)}`).appendChild(tdName);

                let tdCode = document.createElement('td');
                tdCode.innerText = neighbour[0].cioc
                document.getElementById(`${String(i)}`).appendChild(tdCode);

                let tdCapital = document.createElement('td');
                tdCapital.innerText = neighbour[0].capital
                document.getElementById(`${String(i)}`).appendChild(tdCapital);

                let tdBorders = document.createElement('td');
                tdBorders.innerText = neighbour[0].borders
                document.getElementById(`${String(i)}`).appendChild(tdBorders);
            })
        }
    })
})
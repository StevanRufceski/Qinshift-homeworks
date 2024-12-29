console.log("completed")

let numberOfRows = prompt("How many rows your table will have?");
let numberOfColumns = prompt("How many columns your table will have?");

for (let j = 0; j < numberOfColumns; j++){
    document.getElementById("trHead").innerHTML += `<th>Col.${j+1}</th>`
}
for (let i = 0; i < numberOfRows; i++){
    document.getElementsByTagName("tbody")[0].innerHTML += `<tr id="tr${i+1}"></tr>`
    for (let j = -1; j < numberOfColumns; j++){
        if (j<0) {
            document.getElementById(`tr${i+1}`).innerHTML += `<td><b>Row.${i+1}</b></td>`;
        }else{
            document.getElementById(`tr${i+1}`).innerHTML += `<td>Row.${i+1}/Col.${j+1}</td>`;
        }
    }
    }
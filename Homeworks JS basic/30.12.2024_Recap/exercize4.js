console.log("connected");

arrayNew = [];
let  i = 0;

function collectArray(i){
    let newElement = Number(prompt("Please enter new array element!"));
    arrayNew[i] = newElement;
    i ++;
    let answer = prompt ("Will you enter more element? y/n").toLowerCase;
    if (answer = "y") {
        collectArray(i)
    }else{
        filteredArray = []; 
        for (let j=0; j<arrayNew.lenght; j++){
            if (((typeof arrayNew[j]) != null)&&((typeof arrayNew[j]) != undefined)&&((typeof arrayNew[j]) != "")&&((typeof arrayNew[j]) != NaN)){
                filteredArray.push(arrayNew[j]);
            }
        }

    }

}

collectArray(i);
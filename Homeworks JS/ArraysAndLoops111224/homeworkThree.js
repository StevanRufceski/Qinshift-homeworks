function continueArray(continuingArray){
    let continuity = prompt(`This is your array [${continuingArray}].
        Do you like to add more elements to this array? (Y/N)`);
    if (continuity.toLowerCase() === "y") {
        readArray(continuingArray);
    }else if (continuity.toLowerCase() === "n"){
        alert(`Your concanated array is "${continuingArray.join(" ")}."`)
    }else if (continuity === null){
        return;
    }else{
        alert (`Please answer with "Y-yes" or "N-no".`);
        continueArray(continuingArray);
    }
}

function readArray(readingArray){
    let askedString = prompt(`Please input string for the array you want to concatanate:`)
    if (askedString===null){
        return;
    }else{
        readingArray.push(askedString);
        continueArray(readingArray);
    }
}

let newArray=[];
readArray(newArray);

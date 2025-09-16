function listOfPersons (names, surnames){
    let fullNames = [];
    for (i=0; i<names.length; i++){
        fullNames[i] = String((i+1)+"."+names[i]+" "+surnames[i])
    }
    return fullNames
}
let firstNames = ["Stevan", "Tony", "Jakov"];
let lastNames = ["Rufceski", "Stojkoski", "Ristoski"]
console.log(listOfPersons (firstNames, lastNames));
function arrayObject(array){
    let minNumber = array[0];
    let maxNumber = array[0];
        for (let i=0; i<array.length; i++){
        if (minNumber>array[i]){
            minNumber = array[i];
        }else if (maxNumber<array[i]){
            maxNumber = array[i];
        }
    }
    let objectArray = {
        maxNum: maxNumber,
        minNum: minNumber,
    }
    return objectArray;
}

let testArray = [2,3,"hello",5,6,7,8,9,4,15,10]
console.log("Max: "+arrayObject(testArray).maxNum);
console.log("Min: "+arrayObject(testArray).minNum);
console.log("Sum: "+((arrayObject(testArray).maxNum+arrayObject(testArray).minNum)));


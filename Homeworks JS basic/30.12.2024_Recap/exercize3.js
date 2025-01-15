console.log("connected");
let grades = [10, 6, 8, 9, 6];

function calAvg(gradesArray){
    let gradeSum = 0;
    for (let i = 0; i<gradesArray.lenght; i++){
        gradeSum = gradeSum + gradesArray[i];
    }
    // console.log(gradeSum);
    let avgGrade = gradeSum/5;
    if (avgGrade>=8){
        alert("You passed!");
    }else{
        alert("You failed!");
    }
}
calAvg(grades);

listOfStudents = [];

let saveButton = document.getElementById("saveButton");
saveButton.addEventListener("click", saveStudentFunc);
function saveStudentFunc(){
    let newStudentName = document.getElementById("name").value;
    let newStudentSurname = document.getElementById("surname").value;
    let newStudentAge = document.getElementById("age").value;
    let newStudent = {
        name: newStudentName,
        surname: newStudentSurname,
        age: newStudentAge,
    }
    // console.log(newStudent)
    addStudentFunc(newStudent);
    return newStudent;
}
function addStudentFunc(newStudent){
    // console.log(newStudent);
    listOfStudents.push(newStudent);
    console.log(listOfStudents);


}





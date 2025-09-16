console.log("connected");

function saveStudentFunc(){
    let newStudentName = document.getElementById("name").value;
    let newStudentSurname = document.getElementById("surname").value;
    let newStudentAge = document.getElementById("age").value;
    let newStudent = {
        name: newStudentName,
        surname: newStudentSurname,
        age: newStudentAge,
    }
    addStudentFunc(newStudent);
    clearInputs();
    return newStudent;
}
function addStudentFunc(newStudent){
    listOfStudents.push(newStudent);
    document.getElementsByTagName("ul")[0].innerHTML += `<li>Name: ${newStudent.name} ${newStudent.surname} Age: ${newStudent.age}</li>`;
}
function clearInputs(){
    document.getElementById("name").value="";
    document.getElementById("surname").value="";
    document.getElementById("age").value="";
}

listOfStudents = [];

let saveButton = document.getElementById("saveButton");
saveButton.addEventListener("click", saveStudentFunc);




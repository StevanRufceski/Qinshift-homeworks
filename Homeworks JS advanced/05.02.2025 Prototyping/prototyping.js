let allStudents = [];
const student = {
    firstName: ``,
    lastName: ``,
    age: ``,
    academy: {},
    currrentSubject: {},
    completedSubjects: [],

    startAcademy: this.academy,

    startSubject: function(subject){
        if (this.academy === null){
            console.log(`ERROR. The student has not enrolled into academy or the subject is not part of student's academy.`)
        } else {
            this.currrentSubject = subject
        }
    }
}
const subject = {
    title: ``,
    numberOfClasses: 10,
    isElectable: undefined,
    academy: {},
    students: [],

    overrideClasses: function(number){
        if (number<3) {
            return console.log(`ERROR. The number of classes can't be smaller than 3.`)
        } else {
            this.numberOfClasses = number;
            return console.log(this.numberOfClasses)
        }
    }
}

const academy = {
    name: ``,
    students: [],
    subjects: [],
    start: ``,
    end: ``,
    
    numberOfClasses: function() {
        return this.subjects.length;
    },
    printStudents: function(){
        console.log(this.students);
    },
    printSubjects: function(){
        console.log(this.subjects);
    }
}

const academyOne = Object.create(academy);
academyOne.name = "Academy One";
academyOne.subjects = []
academyOne.start = "02.10.2024"
academyOne.end = "02.10.2025"
academyOne.id = `academyOne`

const academyTwo = Object.create(academy);
academyTwo.name = "Academy Two";
academyTwo.subjects = []
academyTwo.start = "02.10.2024"
academyTwo.end = "02.10.2025"
academyTwo.id = `academyTwo`


const academyOneSubjectOne = Object.create(subject);
academyOneSubjectOne.title = "Academy One - Subject One";
academyOneSubjectOne.isElectable = true;
academyOneSubjectOne.academy = academyOne;
academyOneSubjectOne.students = []
academyOne.subjects.push(academyOneSubjectOne);

const academyOneSubjectTwo = Object.create(subject);
academyOneSubjectTwo.title = "Academy One - Subject Two";
academyOneSubjectTwo.isElectable = false;
academyOneSubjectTwo.academy = academyOne;
academyOneSubjectTwo.students = []
academyOne.subjects.push(academyOneSubjectTwo);

const academyOneSubjectThree = Object.create(subject);
academyOneSubjectThree.title = "Academy One - Subject Three";
academyOneSubjectThree.isElectable = true;
academyOneSubjectThree.academy = academyOne;
academyOneSubjectThree.students = []
academyOne.subjects.push(academyOneSubjectThree);


const academyTwoSubjectOne = Object.create(subject);
academyTwoSubjectOne.title = "Academy Two - Subject One";
academyTwoSubjectOne.isElectable = true;
academyTwoSubjectOne.academy = academyTwo;
academyTwoSubjectOne.students = []
academyTwo.subjects.push(academyTwoSubjectOne);

const academyTwoSubjectTwo = Object.create(subject);
academyTwoSubjectTwo.title = "Academy Two - Subject Two";
academyTwoSubjectTwo.isElectable = false;
academyTwoSubjectTwo.academy = academyTwo;
academyTwoSubjectTwo.students = []
academyTwo.subjects.push(academyTwoSubjectTwo);

const academyTwoSubjectThree = Object.create(subject);
academyTwoSubjectThree.title = "Academy Two - Subject Three";
academyTwoSubjectThree.isElectable = true;
academyTwoSubjectThree.academy = academyTwo;
academyTwoSubjectThree.students = []
academyTwo.subjects.push(academyTwoSubjectThree);

const studentOne = Object.create(student);
studentOne.firstName = "studentOne";
studentOne.lastName = "oneStudent";
studentOne.age = 20;
studentOne.academy = academyOne;
studentOne.currrentSubject = academyOneSubjectOne;
studentOne.completedSubjects = [academyOneSubjectTwo];
academyOneSubjectTwo.students.push(studentOne)
academyOneSubjectOne.students.push(studentOne)
allStudents.push(studentOne)


const studentTwo = Object.create(student);
studentTwo.firstName = "studentTwo";
studentTwo.lastName = "twoStudent";
studentTwo.age = 22;
studentTwo.academy = academyOne;
studentTwo.currrentSubject = academyOneSubjectOne;
studentTwo.completedSubjects = [academyOneSubjectThree];
academyOneSubjectThree.students.push(studentTwo)
academyOneSubjectOne.students.push(studentTwo)
allStudents.push(studentTwo)

function printAcademyStudents(academyStudents) {
    console.log(academyStudents);
    for (i=0; i<academyStudents.length; i++) {
        let newStudent = document.createElement('option');
        newStudent.value = academyStudents[i].firstName
        newStudent.innerText = academyStudents[i].firstName

        document.getElementById(`selectStudent`).appendChild(newStudent);
    }
}


let academyStudents = []
let selectAcademy = document.getElementById("selectAcademy");
selectAcademy.addEventListener("change", function(event){
    event.preventDefault();
    document.getElementById("selectStudent").innerHTML = ``
    academyStudents = allStudents.filter((element) => {
        if (element.academy.id === selectAcademy.value) {
            return element
        }
    });
    printAcademyStudents(academyStudents);
})










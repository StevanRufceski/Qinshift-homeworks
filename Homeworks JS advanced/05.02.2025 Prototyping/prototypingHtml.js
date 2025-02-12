const allAcademies = []
function printAcademyDetails(academy) {
    // document.getElementsByTagName(`table`).style.display = `none`;
    Array.from(document.getElementsByTagName('table')).forEach(function(table) {
        table.style.display = 'none';
    });
    document.getElementById(`academyDetailsTable`).style.display = `block`;

    let newTr = document.createElement('tr');
    document.getElementById(`academyDetailsBody`).appendChild(newTr);

    let tdAcademyName = document.createElement('input');
    tdAcademyName.type = `text`;
    tdAcademyName.placeholder = academy.name
    let tdAcademyLocation = document.createElement('input');
    tdAcademyLocation.type = `text`;
    tdAcademyLocation.placeholder = academy.name
    let tdAcademyClasses = document.createElement('input');
    tdAcademyClasses.type = `text`;
    tdAcademyClasses.placeholder = academy.name
    let tdAcademyCapacity = document.createElement('input');
    tdAcademyCapacity.type = `text`;
    tdAcademyCapacity.placeholder = academy.name
    let tdAcademyStart = document.createElement('input');
    tdAcademyStart.type = `text`;
    tdAcademyStart.placeholder = academy.name
    let tdAcademyEnd = document.createElement('input');
    tdAcademyEnd.type = `text`;
    tdAcademyEnd.placeholder = academy.name



    newTr.append(tdAcademyName, tdAcademyLocation, tdAcademyClasses, tdAcademyCapacity, tdAcademyStart, tdAcademyEnd); 
}

function printAllAcademies(allAcademies){
    // document.getElementsByTagName(`table`).style.display = `none`;
    Array.from(document.getElementsByTagName('table')).forEach(function(table) {
        table.style.display = 'none';
    });
    document.getElementById(`allAcademiesTable`).style.display = `block`;
    for (i = 0; i < allAcademies.length; i++){

        let newTr = document.createElement('tr');
        document.getElementById(`allAcademiesBody`).appendChild(newTr);

        let tdAcademyName = document.createElement('td');
        tdAcademyName.innerText = allAcademies[i].name

        let tdAcademyLocation = document.createElement('td');
        tdAcademyLocation.innerText = allAcademies[i].location

        let tdAcademyManage = document.createElement('td');
        tdAcademyManage.innerHTML += `<input type="button" class="button id="academySubjects${i+1}" value="Subjects"></input>`;
        tdAcademyManage.innerHTML += `<input type="button" class="button id="academyStudents${i+1}" value="Students"></input>`;
        tdAcademyManage.innerHTML += `<input type="button" class="button id="academyManage${i+1}" value="Details"></input>`;

        newTr.append(tdAcademyName, tdAcademyLocation, tdAcademyManage); 

        let academyManageBtn = document.getElementById(`academyManage${i+1}`);
        academyManageBtn.addEventListener("click", function(event){
            event.preventDefault();
            alert ("clickato")
            printAcademyDetails(allAcademies[i])
        })
    }
}

function Institution(location, capacity){
    const date = new Date();
    const timestamp = date.valueOf();
    this.id = timestamp
    this.location = location
    this.capacity = capacity
    this.validateCapacity = function(theCapacity, capacity, name){
        if (name === undefined) {
            name = `This institute`
        }
        if(theCapacity<=1) {
            return `ERROR: ${name} is has no more capacity!`
        } else if (theCapacity>capacity) {
            return `${name}, currrently does not have capacity of ${theCapacity} students!`
        } else {
            return `${name}, currrently has capacity for ${theCapacity} students!`
        }
    }
}


function Academy(name, subjects, students, start, end){
    Object.setPrototypeOf(this, new Institution("Skopje", 1000))
    this.name = name
    this.subjects = subjects
    this.students = students
    this.start = start
    this.end = end
    this.numberOfClasses = this.subjects.length*10

    this.printStudents = () => {
        return this.students;
    }
    this.printSubjects = () => {
        return this.subjects;
    }
};

const qinshift = new Academy(`Qinshift`, [`uikuikl`, `tyhyth`], [`swefew`, `wefew`], `01.09.2024`, `01.09.2025`)
const theQinshift = new Academy(`The Qinshift`, [`uikuikl`, `tyhyth`], [`swefew`, `wefew`], `01.09.2024`, `01.09.2025`)
allAcademies.push(qinshift, theQinshift);
console.log(qinshift)
console.log(qinshift.printSubjects())
console.log(qinshift.printStudents())
console.log(qinshift.validateCapacity(0, qinshift.capacity, qinshift.name))
console.log(qinshift.validateCapacity(20, qinshift.capacity, qinshift.name))
console.log(qinshift.validateCapacity(120, qinshift.capacity, qinshift.name))
console.log(qinshift)

function Course(desription, price){
    const date = new Date();
    const timestamp = date.valueOf();
    this.id = timestamp
    this.desription = desription
    this.price = price

    this.validatePrice = function(thePrice, name){
        if (name === undefined){
            name = `this course`
        }
        if(thePrice<0) {
            return `ERROR: The price of ${name} can't be negative!`
        } else {
            return `The price of ${name} course is ${thePrice}.`
        }
    }
}

function Subject(title, numberOfClasses, isElectable, academy, students){
    Object.setPrototypeOf(this, new Course("Full stack programming course", 500))
    this.title = title
    this.numberOfClasses = numberOfClasses
    this.isElectable = isElectable
    this.academy = academy
    this.students = students

    this.overrideClasses = function(number, name){
        if (name === undefined) {
            name = `ergerg`
        }
        if (number<3) {
            return `ERROR. The number of classes can't be smaller than 3.`
        } else {
            this.numberOfClasses = number;
            return this.numberOfClasses
        }
    }
};
const htmlBasics = new Subject ("Hypertext Markup Language - BASIC", 10, false, qinshift, []);
const htmlAdvanceed = new Subject ("Hypertext Markup Language - ADVANCED", 10, true, qinshift, []);
const cssBasics = new Subject ("Cascading Style Sheets - BASIC", 11, false, qinshift, []);
const cssAdvanced = new Subject ("Cascading Style Sheets - ADVANCED", 11, true, qinshift, []);
qinshift.subjects.push(htmlBasics, htmlAdvanceed, cssBasics)
console.log(htmlBasics)
console.log(htmlBasics.overrideClasses(5))
console.log(htmlBasics.overrideClasses(2))
console.log(htmlBasics.validatePrice(10))
console.log(htmlBasics.validatePrice(-10))
console.log(qinshift.subjects)

function Person(email, phone){
    const date = new Date();
    const timestamp = date.valueOf();
    this.id = timestamp
    this.email = email
    this.phone = phone

    this.validateEmail = function(theEmail, name){
        if (!theEmail.includes('@')){
            this.email = ``
            return `ERROR: Please enter valid email address!!`
        } else {
            return `The email address of ${name} is ${theEmail}.`
        }
    }
}
function Student(firstName, lastName, age, completedSubjects, academy, subject, email, phone){
    Object.setPrototypeOf(this, new Person(email, phone))
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.completedSubjects = completedSubjects
    this.academy = academy
    this.startAcademy = this.academy

    this.startSubject = function(){
        if ((this.academy != undefined)&&(this.academy.subjects.includes(subject))) {
            this.currentSubject = subject
        }
    }
};

const studentOne = new Student (`Bob`, `Bobsky`, 20, [], qinshift, htmlBasics, `bob@domain.com`, 55500076)
htmlBasics.students.push(studentOne)
const studentTwo = new Student (`Tom`, `Tomsky`, 20, [], qinshift, htmlAdvanceed, `tomdomain.com`, 55500076)
htmlAdvanceed.students.push(studentOne)
const studentThree = new Student (`Jim`, `Jimsky`, 20, [], qinshift, cssBasics, `jim@domain.com`, 55500076)
cssBasics.students.push(studentOne)
const studentFour = new Student (`Paul`, `Paulsky`, 20, [], qinshift, cssAdvanced, `paul@domain.com`, 55500076)

qinshift.students.push(studentOne, studentTwo, studentThree, studentFour)

console.log(studentOne.validateEmail(studentOne.email, studentOne.firstName))
console.log(studentOne)
console.log(studentTwo.validateEmail(studentTwo.email, studentTwo.firstName))
console.log(studentTwo)
console.log(studentThree.startSubject())
console.log(studentThree)
console.log(studentFour.startSubject())
console.log(studentFour)


console.log(htmlBasics)
console.log(htmlAdvanceed)
console.log(cssBasics)
console.log(qinshift)

printAllAcademies(allAcademies);






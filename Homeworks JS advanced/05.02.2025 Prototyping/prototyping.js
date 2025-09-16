function Institution(location, capacity){
    this.id = new Date()
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
console.log(qinshift)
console.log(qinshift.printSubjects())
console.log(qinshift.printStudents())
console.log(qinshift.validateCapacity(0, qinshift.capacity, qinshift.name))
console.log(qinshift.validateCapacity(20, qinshift.capacity, qinshift.name))
console.log(qinshift.validateCapacity(120, qinshift.capacity, qinshift.name))
console.log(qinshift)

function Course(desription, price){
    this.id = new Date()
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
    this.id = new Date()
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








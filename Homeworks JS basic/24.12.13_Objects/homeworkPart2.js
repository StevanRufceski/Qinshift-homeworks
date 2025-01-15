console.log("connected");

function checkReadingStatusFunc (title, author, readingStatus){
    if (this.readingStatus === true) {
        return `Already read "${this.title}" by ${this.author}.`
    } else {
        return `You still need to read "${this.title}" by ${this.author}.`
    }
}

function saveBookFunc(){
    let newBookTitle = document.getElementById("title").value;
    let newBookAuthor = document.getElementById("author").value;
    let newBookReadingStatus = document.getElementById("yesOption").checked;
    let newBook = {
        title: newBookTitle,
        author: newBookAuthor,
        readingStatus: newBookReadingStatus,
        checkReadingStatus: checkReadingStatusFunc,
    }

    addBookFunc(newBook);
    clearInputs();
    return newBook;

}
function addBookFunc(newBook){
    listOfBooks.push(newBook);
    document.getElementsByTagName("ul")[0].innerHTML += `<li>${newBook.checkReadingStatus()}</li>`;

}
function clearInputs(){
    document.getElementById("title").value="";
    document.getElementById("author").value="";
    document.getElementsByName("readingStatus").forEach (radio => radio.checked = false);
}

listOfBooks = [];

let saveButton = document.getElementById("saveButton");
saveButton.addEventListener("click", saveBookFunc);




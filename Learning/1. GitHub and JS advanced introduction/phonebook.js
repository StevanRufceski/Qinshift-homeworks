let contacts = [];
let contactToEdit = null

function manageContact(){
    if (contactToEdit != null) {
        console.log(contactToEdit)
        contactToEdit.firstName = document.getElementById("firstNameInput").value;
        contactToEdit.lastName = document.getElementById("lastNameInput").value;
        contactToEdit.phone = document.getElementById("phoneInput").value;
        contactToEdit = null
    } else {
        let newContact = new Contact(contacts, firstName.value, lastName.value, phone.value)
        contacts.push(newContact);
    }
    emptyInputs()
    renderTable(contacts);
}
function deleteContact(idToManage){
    const contactToDelete = contacts.find((element) => {
        return element.id === idToManage
     });
    contacts.splice(contacts.indexOf(contactToDelete), 1);
    renderTable(contacts);
}

function renderTable(contacts){
    document.getElementsByTagName(`tbody`)[0].innerHTML = '';

    for (i=0; i<contacts.length; i++){
        let newRow = document.createElement(`tr`)
        let idCell = document.createElement(`td`);
        let firstNameCell = document.createElement(`td`);
        let lastNameCell = document.createElement(`td`);
        let phoneCell = document.createElement(`td`);
        let actionCell = document.createElement(`td`);
        let editBtn = document.createElement(`button`);
        let deleteBtn = document.createElement(`button`);

        idCell.innerText = contacts[i].id
        firstNameCell.innerText = contacts[i].firstName
        lastNameCell.innerText = contacts[i].lastName
        phoneCell.innerText = contacts[i].phone

        let idToManage = contacts[i].id

        editBtn.innerText = `Edit`
        editBtn.onclick = function (){
            const ctcToEdit = contacts.find((element) => {
                return element.id === idToManage
             });
            document.getElementById("firstNameInput").value = ctcToEdit.firstName;
            document.getElementById("lastNameInput").value = ctcToEdit.lastName;
            document.getElementById("phoneInput").value = ctcToEdit.phone;
            contactToEdit = ctcToEdit

        }

        deleteBtn.innerText = `Delete`
        deleteBtn.onclick = function (){
            deleteContact(idToManage)
            contactToEdit = null
        }

        actionCell.append(editBtn, deleteBtn);
        newRow.append(idCell, firstNameCell, lastNameCell, phoneCell, actionCell);
        document.getElementsByTagName(`tbody`)[0].appendChild(newRow);
    }
}

function emptyInputs(){
    document.getElementById("firstNameInput").value = ``;
    document.getElementById("lastNameInput").value = ``;
    document.getElementById("phoneInput").value = ``;
}

function Contact (contacts, firstName, lastName, phone) {
    this.id = contacts.length + 1;
    this.firstName = firstName
    this.lastName = lastName
    this.phone = phone
}

let firstName = document.getElementById("firstNameInput");
let lastName = document.getElementById("lastNameInput");
let phone = document.getElementById("phoneInput");
let error = document.getElementById("error");
let cancelBtn = document.getElementById(`cancelBtn`);
let saveBtn = document.getElementById(`saveBtn`);


cancelBtn.addEventListener(`click`, function(event){
    event.preventDefault()
    emptyInputs()
    document.getElementById(`error`).style.display = `none`
    contactToEdit = null
})

saveBtn.addEventListener(`click`, function(event){
    event.preventDefault()
    if ((!firstName.value)||(!lastName.value)||(!phone.value)){
        error.style.display = `block`
        error.innerText = `Please enter all inputs!`
    } else {
        error.style.display = `none`
        manageContact();
    }
})

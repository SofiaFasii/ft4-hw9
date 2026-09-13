const inputName = document.querySelector('.inputName')
const inputSurname = document.querySelector('.inputSurname')
const inputPhone = document.querySelector('.inputPhone')
const inputGmail = document.querySelector('.inputGmail')
const btnSave = document.querySelector('.btnSave')
const phoneList = document.querySelector('.phoneList')
let contacts = loadContacts()
let edit = null

function loadContacts(){
    const saved = localStorage.getItem('phone-storage')
    return saved ? JSON.parse(saved) : []
}
function saveContacts(){
    localStorage.setItem('phone-storage', JSON.stringify(contacts))
}
btnSave.addEventListener("click", () => {
    const name = inputName.value.trim()
    const surname = inputSurname.value.trim()
    const phone = inputPhone.value.trim()
    const gmail = inputGmail.value.trim()
    if(
        name === '' || surname === '' || phone === '' || gmail === ''
    ) return;
    const contact = {
        id: Date.now(),
        name,
        surname,
        phone,
        gmail,
    }
    if(edit === null){
        contacts.unshift(contact)
        saveContacts();
        renderContacts();
    } else {
        contacts = contacts.map(contact => {
            if(contact.id === edit){
                return{
                    id:contact.id,
                    name,
                    surname,
                    phone,
                    gmail,
                }
            }
            return contact
        })
        saveContacts();
        renderContacts();
        edit = null;
    }
    inputName.value = '';
    inputSurname.value = '';
    inputPhone.value = ''; 
    inputGmail.value = ''
})

function renderContacts(){
    phoneList.innerHTML = ''
    contacts.forEach(contact => {
        const li = document.createElement('li')
        li.innerHTML = `
            <p>${contact.name}</p>
            <p>${contact.surname}</p>
            <p>+380 ${contact.phone}</p>
            <p>${contact.gmail}</p>
            <div>
                <button class="changeBtn">Edit</button>
                <button class="removeBtn">Remove </button>
            </div>
        `
        const changeBtn = li.querySelector('.changeBtn')
        changeBtn.addEventListener('click', () => {
            edit = contact.id;
            inputName.value = contact.name;
            inputSurname.value = contact.surname;
            inputPhone.value = contact.phone;
            inputGmail.value = contact.gmail;
        })
        const removeBtn = li.querySelector('.removeBtn')
        removeBtn.addEventListener("click", () => {
            contacts = contacts.filter(item => item.id !== contact.id)
            saveContacts();
            renderContacts();
        })
        phoneList.appendChild(li)
    });
}
renderContacts()
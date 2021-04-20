const textField = document.querySelector('.text-field')
const selectedSearch = document.querySelector('.select-search')
const btnByName = document.querySelector('.by-name')
const container = document.querySelector('.list')

window.onload  = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const body = await response.json()
    textField.onkeyup = () => filterUsers(body)
    btnByName.onclick = () => usersByName(body)
}

const showAllusers = (body) => {
    container.innerHTML = body.map( user => `<li>${user.username} (${user.name}), email:${user.email}</li>`).join('')
}

const filterUsers = (users) => {
    filteredUsers = []
    // console.log(selectedSearch.value)
    let searchQuery = document.querySelector("input[type=text]").value.toLowerCase() 
    if (selectedSearch.value === '1') {
        filteredUsers = users.filter( user => user.name.toLowerCase().includes(searchQuery))
    } else if (selectedSearch.value === '2') {
        filteredUsers = users.filter( user => user.username.toLowerCase().includes(searchQuery))
    } else if (selectedSearch.value === '3') {
        filteredUsers = users.filter( user => user.email.toLowerCase().includes(searchQuery))
    }
    showAllusers(filteredUsers)
}

const usersByName = (users) => {
    container.innerHTML = ''
    const namesArr = users.map( user => user.name)
    const orderedNames = namesArr.sort()
    // console.log(orderedNames)
    const recontructedArr = orderedNames.map( nam => 'a')
    console.log(users.find(user => user.username === 'Bret'))
}
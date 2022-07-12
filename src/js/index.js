

const url = 'https://api.github.com/users'
const main = document.getElementById('main')
//let user = 'Arnei-Dev'
let names = ''

function getUser(user) {
      
    fetch(`${url}/${user}`)
    .then((response) => response.json())
    .then((data) => {
        names += `${data.name} possui ${data.public_repos} repositório no Github como ${data.login}<br>`
        main.innerHTML = names
    })
    
    .catch((error) => console.error('Erro: ', error.message || error))
}

const userInput = document.getElementById('username')
userInput.addEventListener('focusout', function(event) {
    getUser(event.target.value)
})
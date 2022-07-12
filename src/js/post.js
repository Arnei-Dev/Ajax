
//import fetch from 'node-fetch' // Do import to Run in the terminal 

let _data = {
    title: "teste de envio post",
    body: "loren ipsum de fgrmu",
    userId: 5
}

const postContainer = document.getElementById('posts')
let postMarkup = ''

//Method Post - cadastra um post

function setPost(data) {
    
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(data),
        headers:{
            'Content-Type' : 'application/json; charset=UTF-8'
        }
    })
    .then(Response => Response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error))
}

console.log("Estou aqui")
//Method Get - Solicita todos os posts

function getPosts() {

    fetch('https://jsonplaceholder.typicode.com/posts/', {
        headers:{
            'Content-Type' : 'application/json; charset=UTF-8'
        }
    })
    .then(Response => Response.json())
    .then(data => {
        data.map(function(post) {
             postMarkup += `
                <div class="posts-item" id="post-${post.id}">
                    <h3>${post.title}</h3>
                    <p>${post.body}</p>
                </div>
             `
             postContainer.innerHTML = postMarkup
        })
    })

    
    .catch(error => console.error(error))
}  

getPosts()
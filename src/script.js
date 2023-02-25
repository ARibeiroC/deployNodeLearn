// [CRUD] Javascript BÁSICO
const miniTwitter = {
    usuario: [
        {
            username: 'Anderson Ribeiro',
        },
        {
            username: 'Davi Miguel'
        },
        {
            username: 'Daniela Campos'
        }

],
    post: [
        
    ]
}
// CREATE
function criaPost(dados){
    miniTwitter.post.push({
        id: miniTwitter.post.length + 1,
        owner: dados.owner,
        content: dados.content
    })
}

criaPost({ owner: miniTwitter.usuario[0].username, content: 'Primeiro post'})
criaPost({ owner: miniTwitter.usuario[1].username, content: 'Segundo post'})
criaPost({ owner: miniTwitter.usuario[2].username, content: 'Terceiro post'})

// READ
function selectPost(){
    return miniTwitter.post
}
console.log(selectPost())

//UPDATE
function updatePost(id, txtContent){
    const newContent = selectPost().find((post)=> {
            return post.id === id
        }
    )
    newContent.content = txtContent
}
updatePost(1, 'Novo conteudo')

// DELETE
function deletePost(id){
    const deletePost = selectPost().filter((postAtual)=> {
        return postAtual.id !== id
    }
)
console.log(deletePost)

}
deletePost(2)



console.log(selectPost())
    




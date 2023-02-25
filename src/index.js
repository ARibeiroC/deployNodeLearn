const express = require('express')
const path = require('path')

const app = express()
const route = express.Router()
const dir = path.join(__dirname + "/pages/index.html")

const port = 3333
const hostname = 'localhost'

route.get('/', (req, res)=>{
    res.sendFile(dir)
})

route.get('/contatos', (req, res)=>{
    res.sendFile(dir)
})


app.use(route)

app.listen(port, hostname, ()=> console.log("Servidor Rodando"))




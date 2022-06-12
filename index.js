//configuracao inicial
const mongoose = require('mongoose')
const express = require('express')
const app = express()

const Person = require('./models/Person')//Aqui eu estou chamando o arquivo Person

//forma de ler o JSON
app.use(express.urlencoded({extended:true}));

app.use(express.json())

//rotas da API
app.post('/person', async (req,res) => {
    //req.body
    const {name, salary, approved} = req.body
    const person = {
        name,
        salary,
        approved 
    }
    try {
        //criando dados
        await Person.create(person)

        res.status(201).json({message: 'Pessoa inserida com sucesso'})

    } catch (error) {
        res.status(500).json({error: error})
    }
    //{name: Lilian, salary:5000, approved: false}
})//enviar dados

//rota inicial / endpoint
app.get('/', (req,res)=>{
    //mostrar requisição(req)
    res.json({message: 'oi express!'})

    //criar um objeto que satisfaça minha aplicação
})

//

//entregar uma porta
const DB_USER = 'dbUser'
const DB_PASSWORD = encodeURIComponent('dbUser1234')

mongoose
    .connect(
        `mongodb+srv://${DB_USER}:${DB_PASSWORD}@apicluster.5vx716n.mongodb.net/bancoDaApi?retryWrites=true&w=majority`
    )
    .then(() => {
        console.log("Conectamos ao MongoDB!")
        app.listen(3005)
    })//quando da certo
    .catch((err)=> console.log(err))//quando dá erro

app.listen(3005)
//configuracao inicial
require('dotenv').config()
const mongoose = require('mongoose')
const express = require('express')
const app = express()

const Person = require('./models/Person')//Aqui eu estou chamando o arquivo Person

//forma de ler o JSON
app.use(
    express.urlencoded({
        extended:true,
    }),
)

app.use(express.json())

//rotas da API
const personRoutes = require('./routes/personRoutes')

app.use('/person',personRoutes) //manda como argumento o arquivo

/*
//esta parte vai para o arquivo personRoutes, na pasta Routes
app.post('/person', async (req,res) => {
    //req.body(body pe onde vai chegar os dados)
    const {name, salary, approved} = req.body
    if(!name) {
        res.status(422).json({error : 'O nome é obrigatório!'})
        //o certo é fazer isso em todos os campos
    }
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
*/

//rota inicial / endpoint
app.get('/', (req,res)=>{
    //mostrar requisição(req)
    res.json({message: 'oi express!'})
    //criar um objeto que satisfaça minha aplicação
})

//entregar uma porta
const DB_USER = process.env.DB_USER
const DB_PASS = encodeURIComponent(process.env.DB_PASS)
//para usar o arquivo .env tem que instalar npm install dotenv

mongoose
    .connect(
        `mongodb+srv://${DB_USER}:${DB_PASS}@apicluster.5vx716n.mongodb.net/bancoDaApi?retryWrites=true&w=majority`)
    .then(() => {
        console.log("Conectamos ao MongoDB!")
        //app.listen(port)
    })//quando da certo
    .catch((err)=> console.log(err))//quando dá erro

app.listen(3005)
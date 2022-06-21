const router = require('express').Router()

const Person = require('../models/Person')

//Create - Criação de dados


//antes era app.post
router.post('/', async (req,res) => {//tira o person depois de / para nao ficar redundante
    //req.body(body pe onde vai chegar os dados)

    const {name, salary, approved} = req.body

    if(!name) {
        res.status(422).json({error : 'O nome é obrigatório!'})
        //o certo é fazer isso em todos os campos
        return

        
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
})

//Read - Leitura de dados

router.get('/', async (req, res) => {
    try{
        const people = await Person.find()

        res.status(200).json(people)
    } catch (error) {
        res.status(500).json({ error: error })
    }
})

//criar rotas dinâmicas
router.get('/:id', async (req, res) => {
    //console.log(req) tem acesso as requisições, mas não funcionou
    //extrair o dado da requisição, pela url = req.params
    const id = req.params.id

    if(!person) {
        res.status(422).json({message: "O usuário não foi encontrado!"})
        return
    }
    try {
        const person = await Person.findOne({_id: id })//quero encontrar o usuário que tenha o _id

        res.status(200).json(person)
    } catch  (error) {
        res.status(500).json({ error: error})
    }

})

//Update - atualização de dados (PUT, PATCH)
router.patch('/:id', async (req, res)=> {
    const id = req.params.id
    const { name, salary, approved } = req.body
    const person = {
        name,
        salary,
        approved,
    }
    try {
        const updatedPerson = await Person.updateOne({_id: id},person)

        if(updatedPerson.matchedCount === 0) { 
            res.status(422).json({message: "O usuário não foi encontrado!"})
            return
        }
        res.status(200).json(person)
    } catch (error) {
        res.status(500).json({ error: error })
    }

})

//Delete - Deletar dados
router.delete('/:id', async (req, res) => {
    const id = req.params.id

    const person = await Person.findOne({ _id:id})

    if (!person) {
        res.status(422).json({ message: 'O usuário não foi encontrado!'})
        return
    }
    try{

        await Person.deleteOne({_id:id})

        res.status(200).json({ message: 'Usuario removido com sucesso'})

    } catch (error) {
        res.status(500).json({ error: error })
    }
})

module.exports = router

//nome: convenção para a pasta model


const mongoose = require('mongoose')

//criar um modelo para Person
const Person = mongoose.model('Person', {
    name: String,
    salary: Number,
    approved: Boolean,
})

module.exports = Person

// aqui a gente exporta o Person
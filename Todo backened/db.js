const mongoose = require('mongoose')

mongoose.connect('Moongobd Url/todo')

const todoSchema = new mongoose.Schema({
    title : String,
    description : String,
    completed : Boolean
})

const Todo = mongoose.model('data',todoSchema)

module.exports = {
    Todo
};
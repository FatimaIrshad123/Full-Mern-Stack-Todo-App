const express = require('express')
const { Todo } = require('./db')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())

app.post('/createtodo',async function(req,res){
    await Todo.create({
        title : req.body.title,
        description : req.body.description
    })
    res.json({msg:'Todo created successfully'})
})


app.get('/todo',async function(req,res){
    let allTodo =   await Todo.find({})
    res.json(allTodo)
})

app.put('/todo/:id',async function(req,res){
    var userToUpdate = req.params.id
    let x = await Todo.findById(userToUpdate)
    let y = await Todo.updateOne(x, req.body);
    // res.json({msg:'Updated'})
    res.json(y)
})

app.delete('/todo/:id',async function(req,res){
    var userToUpdate = req.params.id
    let x = await Todo.findById(userToUpdate)
    await Todo.deleteOne(x)
    res.json('Deleted')
})

app.listen(3000)
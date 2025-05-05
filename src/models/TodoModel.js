const mongoose = require('mongoose');

const dataSchema = mongoose.Schema({
    username: {type: String},
    todoTitle: {type: String},
    todoDescription: {type: String},
    todoStatus: {type: String},
    todoCreateDate: {type: Date},
    todoUpdateDate: {type: Date},
})

const TodoModel = mongoose.model('TodoList', dataSchema)

module.exports = TodoModel
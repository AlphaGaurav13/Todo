const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://{USEYOURS}:{PASSWORDHERE}@cluster0.5f5cxbz.mongodb.net/todos')


const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
};

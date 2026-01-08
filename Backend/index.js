const express = require('express');
const { todo } = require('./db');
const { createTodo, updateTodo } = require('./types');
const cors = require('cors');

const app = express();


app.use(express.json());
app.use(cors());

app.post("/todo", async (req, res) => {

    // Input validation is happening here
    const createPayload = req.body;
    const validatedPayload = createTodo.safeParse(createPayload);

    if(!validatedPayload.success) {
        res.status(411).json({
            msg: "You are not sending correct inputs",
        })
        return;
    }


    // Now we will put the data into mongo db.

    await todo.create({
        title: validatedPayload.data.title,
        description: validatedPayload.data.description,
        completed: false
    })

    res.json({
        msg: "Todo has been created Successfully"
    })

})


app.put("/todos", async (req, res) => {

    // input validation is happening here
    const updatePayload = req.body;
    const validateUpdatedPayload = updateTodo.safeParse(updatePayload);

    if(!validateUpdatedPayload.success) {
        res.status(411).json({
            msg: "You are not sending the correct input",
        })
        return;
    }

    // update in mongodb here

    await todo.update({
        _id: req.body.id
    }, {
        completed: true
    })

    res.json({
        msg: "todo marked as completed"
    })
    
})

app.get("/todos", async (req, res) => {
    const todos = await todo.find({}); //it returns promise so we have to use async

    res.json({
        todos
    })

})


app.listen(3000, () => {
    console.log("server is running on http://localhost:3000");
})
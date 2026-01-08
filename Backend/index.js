const express = require('express');
const app = express();
const zod = require('./types');

app.use(express.json());

app.get("/todo", (req, res) => {
    
})


app.put("/todos", (req, res) => {

})

app.get("/todos", (req, res) => {

})


app.listen(3000, () => {
    console.log("server is running on http://localhost:3000");
})
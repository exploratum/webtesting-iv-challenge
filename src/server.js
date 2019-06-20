const express = require('express');

const server = express();

server.use(express.json());

const model = require('./model');
const data = require('./data')


server.get('/', (req,res) => {
    res.sendStatus(200)
})

server.delete('/:name', (req, res)=> {
    const name = req.params.name;
    if(model.remove(name)) {
        console.log(data.hobbits);
        res.sendStatus(201);
    }
    else
        res.sendStatus(500);
})  

// server.post('/', (req,res) => {
//     const newHobbit = req.body;
//     model.add(newHobbit);
//     res.status(201)

// })



module.exports = server;


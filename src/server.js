const express = require('express');

const server = express();

server.use(express.json());

const model = require('./model');
const data = require('./data')


server.get('/', (req,res) => {
    res.sendStatus(200)
})

server.post('/', (req,res) => {
    const hobbit = req.body;
    const hobbits = model.add(hobbit);
    if(hobbits !== null) {
        res.status(201).json({hobbits: hobbits});
    }
    else {
        res.sendStatus(500);
    }

})

server.delete('/:name', (req, res)=> {
    const name = req.params.name;
    const hobbits = model.remove(name);
    if( hobbits !== null) {
        res.status(200).json({hobbits:hobbits});
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


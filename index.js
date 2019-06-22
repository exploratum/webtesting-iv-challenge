server = require('./src/server')

const port = process.env.PORT || 5000;
server.listen(port, () => console.log(`\n** server up on port ${port} **\n`));

const hobbits = {
    data: [
        {
            name: 'Frodo',
            id: 1
        },

        { 
            name: 'bilbo',
            id: 2
        }
    ]
}
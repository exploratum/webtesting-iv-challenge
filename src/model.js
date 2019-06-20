const data = require('./data');

function add(hobbit) {
    data.hobbits.push(hobbit);
}

function remove(name) {
    let total = data.hobbits.length;
    data.hobbits = data.hobbits.filter(hobbit => hobbit.name != name)
    if(data.hobbits.length === total - 1)
        return(true);
    else
        return false;
}

module.exports = {
    add,
    remove,
}
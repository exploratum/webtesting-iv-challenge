const data = require('./data');

function add(hobbit) {
    let total = data.hobbits.length;

    data.hobbits.push(hobbit);

    if(data.hobbits.length === total + 1)
        return(total + 1);
    else
        return null;

}

function remove(name) {
    let total = data.hobbits.length;
    data.hobbits = data.hobbits.filter(hobbit => hobbit.name != name);

    if(data.hobbits.length === total - 1)
        return(total - 1);
    else
        return null;
}

module.exports = {
    add,
    remove,
}
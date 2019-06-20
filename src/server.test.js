
const supertest = require('supertest');

const server = require('./server');

const data = require('./data');


describe('Server', () => {
    describe('GET', () => {
        it('responds with 200', () => {
            return supertest(server).get('/')
                .expect(200)
        })
    })

    describe('POST', () => {
        it('adds a new Hobbit', () => {
            return supertest(server).post('/')
                .
        })
    })

    describe('DELETE', () => {
       
        it ('deletes an existing hobbit using its name', () => {
            resetHobbits();
            addOneHobbit();
            return supertest(server).del('/Frodo')
            // .send({name: 'Frodo'})
            // .set('Accept', 'application/json')
            .expect(201);

        })
    })
})


/****************************************************************/
/*                      Test Helper Functions                   */
/****************************************************************/

function resetHobbits() {
    data.hobbits.length = 0;
}

function addOneHobbit() {
    data.hobbits.push({name: 'Frodo'})

}

/****************************************************************/
/*                      Data Helper Functions                   */
/****************************************************************/







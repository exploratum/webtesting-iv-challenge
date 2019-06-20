
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

    beforeEach( () => {
        resetHobbits()
    })

    describe('POST', () => {
        it('adds a new Hobbit', () => {
            return supertest(server).post('/')
                .send({name: 'Bilbo'})
                .set('Accept', 'application/json')
                .expect(201)
                .expect('Content-Type', /json/i)
        })

        it('checks the returned number of hobbits in res', () => {
            return supertest(server).post('/')
                .send({name: 'Bilbo'})
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/i)
                .then(res => expect(res.body.hobbits).toBe(1));

        })
    })

    describe('DELETE', () => {
       
        it ('deletes an existing hobbit using its name', () => {
            addOneHobbit();
            return supertest(server).del('/Frodo')
            // .send({name: 'Frodo'})
            // .set('Accept', 'application/json')
            .expect(200);
        })

        it('checks the returned number of hobbits in res', () => {
            addOneHobbit();
            return supertest(server).del('/Frodo')
                .then(res => expect(res.body.hobbits).toBe(0));

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







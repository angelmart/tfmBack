import { expect } from 'chai';
import request = require('supertest');

describe('Habitacion Controller', () => {
    const port: string = '3000';
    const peticion = request.agent('http://localhost:' + port);

    it('GET /habitaciones', (done) => {
        peticion.get('/habitaciones')
        .end((err, res) => {
            expect(200).to.equal(res.status);
            expect('5ae0692ca0cfa91894ae5c4f').to.equal(res.body[0]._id);
            done();
        });
    });
});
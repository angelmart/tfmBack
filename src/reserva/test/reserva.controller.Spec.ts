import { expect } from 'chai';
import request = require('supertest');
import { ReservaService } from '../reserva.service';

describe('Reserva Controller', () => {
    const port: string = '3000';
    const peticion = request.agent('http://localhost:' + port);

    it('GET /reservas', (done) => {
        peticion.get('/reservas')
        .end((err, res) => {
            expect(200).to.equal(res.status);
            expect('5ae0692ca0cfa91894ae5c55').to.equal(res.body[0]._id);
            done();
        });
    });

    it('GET /reservas/:id', (done) => {
        peticion.get('/reservas/5ae0692ca0cfa91894ae5c55')
        .end((err, res) => {
            expect(200).to.equal(res.status);
            expect(36).to.equal(res.body.precio);
            done();
        });
    });

    it('PATCH /reservas', (done) => {
        peticion.patch('/reservas/5ae0692ca0cfa91894ae5c55')
        .end((err, res) => {
            expect(1).to.equal(res.body.n);
            done();
          });
    });

});